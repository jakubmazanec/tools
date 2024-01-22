import ejs from 'ejs';
import fs from 'fs-extra';
import matter from 'gray-matter';
import merge from 'lodash.merge';
import omit from 'lodash.omit';
import path from 'node:path';
import prettier from 'prettier';
import yaml from 'yaml';
import {type AnyZodObject, type z} from 'zod';

import {NO_INFERRED_PARSER_REGEXP} from './constants.js';
import {type TemplateAttributes, templateAttributesSchema} from './TemplateAttributes.js';
import {TemplateError} from './TemplateError.js';
import {type TemplateFunction} from './TemplateFunction.js';
import {type TemplateRender} from './TemplateRender.js';
import {type TemplateRenders} from './TemplateRenders.js';

export type TemplateOptions<
  A extends AnyZodObject | undefined = undefined,
  D extends AnyZodObject | undefined = undefined,
> = {
  /** Template path. */
  path?: string;

  /** Template content. */
  content: string;

  /** Template attributes.  */
  attributes: A extends undefined ? TemplateAttributes
  : TemplateAttributes & z.infer<NonNullable<A>>;

  /** Zod schema for custom template attributes. */
  attributesSchema?: A | undefined;

  /** Zod schema for template data. */
  dataSchema?: D | undefined;
};

export type TemplateReadOptions<
  A extends AnyZodObject | undefined = undefined,
  D extends AnyZodObject | undefined = undefined,
> = {
  /** Zod schema for custom template attributes. */
  attributesSchema?: A | undefined;

  /** Zod schema for template data. */
  dataSchema?: D | undefined;
};

export type TemplateReadAndRenderOptions<
  A extends AnyZodObject | undefined = undefined,
  D extends AnyZodObject | undefined = undefined,
> = {
  /** Prettier options.  */
  prettierOptions?: prettier.Options | undefined;

  /** Disable formatting the rendered template using Prettier.  */
  disablePrettier?: boolean | undefined;

  /** Zod schema for custom template attributes. */
  attributesSchema?: A | undefined;

  /** Zod schema for template data. */
  dataSchema?: D | undefined;
};

export type TemplateRenderOptions = {
  /** Prettier options.  */
  prettierOptions?: prettier.Options | undefined;

  /** Disable formatting the rendered template using Prettier.  */
  disablePrettier?: boolean | undefined;
};

/**
 * The `Template` object stores all information about a template and has methods for reading and rendering.
 *
 * ```TypeScript
 * let template = new Template({
 *   content: '<%- value %>',
 *   attributes: {
 *     to: 'value.txt',
 *   },
 *   dataSchema: z.object({value: z.number()}),
 * });
 *
 * console.log(await template.render({value: 42})); // ->  [{attributes: {to: 'value.txt'}, data: {value: 42}, content: '42'}]
 * ```
 *
 * @typeParam A A Zod schema type used to define the custom template attributes type.
 * @typeParam D A Zod schema type used to define the template datatype.
 */
export class Template<
  A extends AnyZodObject | undefined = undefined,
  D extends AnyZodObject | undefined = undefined,
> {
  /** Template path. */
  path?: string;

  /** Template content. Templates are written in [EJS](https://ejs.co/). */
  readonly content: string;

  /** Template attributes. These control how the template is rendered. Some attributes can be written in [EJS](https://ejs.co/) and are rendered before the template content is rendered. It is expected that attribute `if` renders to a string that can be parsed as YAML value; if that value is `false`, the rendering is cancelled. Attribute `to` is also rendered and it represents the path of file the resulting template render is supposed to be written into (by the user). Attribute `variables` is an object that is merged with the data object before rendering. If attribute `variables` is an array of objects, that leads to multiple renders, each with different variables object merged with the data. Each variable that is a string is also rendered. */
  readonly attributes: A extends undefined ? TemplateAttributes
  : TemplateAttributes & z.infer<NonNullable<A>>;

  /** Template function. */
  private readonly fn: TemplateFunction;

  /** Zod schema for custom template attributes. */
  readonly attributesSchema: A extends AnyZodObject ? A : null;

  /** Zod schema for template data. */
  readonly dataSchema: D extends AnyZodObject ? D : null;

  constructor({
    path: templatePath,
    content,
    attributes,
    attributesSchema,
    dataSchema,
  }: TemplateOptions<A, D>) {
    if (templatePath) {
      this.path = templatePath;
    }

    this.content = content;
    this.attributes = attributes;
    this.fn = ejs.compile(this.content);

    if (attributesSchema) {
      this.attributesSchema = attributesSchema as A extends AnyZodObject ? A : null;
    } else {
      this.attributesSchema = null as A extends AnyZodObject ? A : null;
    }

    if (dataSchema) {
      this.dataSchema = dataSchema as D extends AnyZodObject ? D : null;
    } else {
      this.dataSchema = null as D extends AnyZodObject ? D : null;
    }
  }

  /**
   * Reads a template from a file.
   *
   * @param templatePath Path to the template file.
   */
  static async read<
    A extends AnyZodObject | undefined = undefined,
    D extends AnyZodObject | undefined = undefined,
  >(templatePath: string, options?: TemplateReadOptions<A, D>): Promise<Template<A, D>> {
    let {data: rawAttributes, content} = matter(await fs.readFile(templatePath, 'utf8'));

    // extending another template
    if (typeof rawAttributes.extends === 'string' && rawAttributes.extends) {
      let extendedTemplate = await Template.read(
        path.join(path.dirname(templatePath), rawAttributes.extends),
        options,
      ); // you can point to any template, but it will be parsed with the same options, including attribute or data schema

      // attributes are recursively merged
      rawAttributes = merge(extendedTemplate.attributes, rawAttributes);

      // if content is empty, use content from the extended template
      if (!content.trim()) {
        content = extendedTemplate.content;
      }
    }

    let attributesSchema =
      options?.attributesSchema ?
        templateAttributesSchema.merge(options.attributesSchema)
      : templateAttributesSchema;
    let attributesParseResult = attributesSchema.safeParse(rawAttributes);

    if (!attributesParseResult.success) {
      throw new TemplateError('INVALID_ATTRIBUTES', {
        cause: attributesParseResult.error,
        data: {
          path: templatePath,
          zodIssues: attributesParseResult.error.issues,
        },
      });
    }

    let attributes = attributesParseResult.data;

    return new this({
      path: templatePath,
      attributes,
      content,
      attributesSchema: options?.attributesSchema,
      dataSchema: options?.dataSchema,
    } as TemplateOptions<A, D>);
  }

  /**
   * Reads a template from a file and then renders it.
   *
   * @param templatePath Path to the template file.
   * @param data Data used for rendering the template.
   * @param options Options object.
   * @return Template renders.
   */
  static async readAndRender<
    A extends AnyZodObject | undefined = undefined,
    D extends AnyZodObject | undefined = undefined,
  >(
    templatePath: string,
    data: D extends undefined ? null : z.infer<NonNullable<D>>,
    options?: TemplateReadAndRenderOptions<A, D>,
  ) {
    let template = await Template.read<A, D>(templatePath, {
      attributesSchema: options?.attributesSchema,
      dataSchema: options?.dataSchema,
    });

    return template.render(data, {
      prettierOptions: options?.prettierOptions,
      disablePrettier: options?.disablePrettier,
    });
  }

  /**
   * Renders the template using data.
   *
   * @param data Data used for rendering the template.
   * @param options Options object.
   * @return Template renders.
   */
  async render(
    data: D extends undefined ? null : z.infer<NonNullable<D>>,
    options?: TemplateRenderOptions,
  ): Promise<TemplateRenders<A, D>> {
    let renders: TemplateRenders<A, D> = [];

    for (let variables of Array.isArray(this.attributes.variables) ?
      this.attributes.variables
    : [this.attributes.variables]) {
      let renderedAttributes = omit(this.attributes, ['if']);
      let renderedVariables = variables;

      if (renderedVariables) {
        for (let [variableName, variableValue] of Object.entries(renderedVariables)) {
          if (typeof variableValue === 'string') {
            renderedVariables[variableName] = ejs.render(variableValue, {...data});
          } else {
            renderedVariables[variableName] = variableValue;
          }
        }

        renderedAttributes.variables = renderedVariables;
      }

      let dataWithAttributes = {...data, attributes: renderedAttributes};

      if (this.attributes.if) {
        let renderedIf = ejs.render(this.attributes.if, dataWithAttributes);
        let parsedIf = yaml.parse(renderedIf) as unknown;

        if (parsedIf === false) {
          continue;
        }
      }

      renderedAttributes.to = ejs.render(renderedAttributes.to, dataWithAttributes);
      dataWithAttributes.attributes = renderedAttributes;

      let content;

      try {
        content = this.fn(dataWithAttributes);
      } catch (error: unknown) {
        throw new TemplateError('FAILED_RENDER', {cause: error});
      }

      if (!options?.disablePrettier) {
        try {
          content = await prettier.format(content, {
            ...options?.prettierOptions,
            filepath: renderedAttributes.to,
          });
        } catch (error: unknown) {
          if (!NO_INFERRED_PARSER_REGEXP.test((error as Error).message)) {
            throw new TemplateError('FAILED_FORMAT', {cause: error});
          }
        }
      }

      renders.push({
        attributes: renderedAttributes,
        data: data ?? null,
        content,
      } as TemplateRender<A, D>);
    }

    return renders;
  }
}

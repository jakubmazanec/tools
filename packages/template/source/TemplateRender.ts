import {type z} from 'zod';

import {type TemplateAttributes} from './TemplateAttributes.js';

/**
 * An object type representing the result of a template render.
 *
 * @typeParam A Type of Zod schema used to validate the custom template attributes.
 * @typeParam D Type of Zod schema used to define the type of template data.
 */
export type TemplateRender<
  A extends z.AnyZodObject | undefined = undefined,
  D extends z.AnyZodObject | undefined = undefined,
> = {
  /** Rendered template attributes. They created from the `to` and `variables` attributes, and from all of the custom template attributes.
   */
  attributes: A extends undefined ? Omit<TemplateAttributes, 'if'>
  : Omit<TemplateAttributes, 'if'> & z.infer<NonNullable<A>>;

  /** Data used to render the template. */
  data: D extends undefined ? null : z.infer<NonNullable<D>>;

  /** Rendered template content. */
  content: string;
};

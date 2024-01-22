import {pathToPosixPath} from '@jakubmazanec/fs-utils';
import _ from 'lodash';
import path from 'node:path';

import {
  importCarsonTemplate,
  parseCarsonTemplateId,
  readCarsonTemplate,
  resolveModule,
} from './internals.js';
import {type TemplateData} from './TemplateData.js';
import {type TemplateRenders} from './TemplateRenders.js';

export type RenderCarsonTemplateOptions = {
  templateId: string;
  templateData: TemplateData;
};

/**
 * Renders a Carson template with provided template data.
 */
export async function renderCarsonTemplate(
  options: RenderCarsonTemplateOptions,
): Promise<TemplateRenders> {
  let [moduleId] = parseCarsonTemplateId(options.templateId);
  let modulePath = await resolveModule(moduleId);
  let template = await readCarsonTemplate(options.templateId);
  let templateModule = await importCarsonTemplate(options.templateId);
  let templateRenders: TemplateRenders = [];

  for (let file of template.files) {
    templateRenders.push(
      ...(
        await file.render(
          {
            ...templateModule,
            ...options.templateData,
          },
          {disablePrettier: true},
        )
      ).map((templateRender) => ({
        ...templateRender,
        template: {
          path: pathToPosixPath(
            `${moduleId}/${path.relative(modulePath, file.path ?? modulePath)}`,
          ),
        },
      })),
    );
  }

  templateRenders = _.sortBy(templateRenders, [
    (templateRender) => templateRender.attributes.to,
    (templateRender) => templateRender.attributes.strategy,
    (templateRender) => templateRender.content,
  ]);

  return templateRenders;
}

import {pathToPosixPath} from '@jakubmazanec/fs-utils';
import _ from 'lodash';
import path from 'node:path';

import {type CarsonTemplate} from './CarsonTemplate.js';
import {importCarsonTemplate, parseCarsonTemplateId, resolveModule} from './internals.js';
import {type TemplateData} from './TemplateData.js';
import {type TemplateRenders} from './TemplateRenders.js';

export type RenderCarsonTemplateOptions = {
  template: CarsonTemplate;
  templateData: TemplateData;
};

/**
 * Renders a Carson template with provided template data.
 */
export async function renderCarsonTemplate(
  options: RenderCarsonTemplateOptions,
): Promise<TemplateRenders> {
  let [moduleId] = parseCarsonTemplateId(options.template.id);
  let modulePath = await resolveModule(moduleId);
  let templateModule = await importCarsonTemplate(options.template.id);
  let templateRenders: TemplateRenders = [];

  for (let file of options.template.files) {
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

import {pathToPosixPath} from '@jakubmazanec/fs-utils';
import {type TemplateError} from '@jakubmazanec/template';
import _ from 'lodash';
import path from 'node:path';

import {type CarsonTemplate} from './CarsonTemplate.js';
import {CarsonTemplateError} from './CarsonTemplateError.js';
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
    let filePath = pathToPosixPath(
      `${moduleId}/${path.relative(modulePath, file.path ?? modulePath)}`,
    );

    try {
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
            path: filePath,
          },
        })),
      );
    } catch (error: unknown) {
      if ((error as InstanceType<typeof TemplateError>).code === 'FAILED_RENDER') {
        // rethrowing original FAILED_RENDER with more informative description
        throw new CarsonTemplateError('FAILED_RENDER', {
          messageParameters: [filePath],
          cause: (error as InstanceType<typeof TemplateError>).cause,
        });
      } else {
        throw error;
      }
    }
  }

  templateRenders = _.sortBy(templateRenders, [
    (templateRender) => templateRender.attributes.to,
    (templateRender) => templateRender.attributes.strategy,
    (templateRender) => templateRender.content,
  ]);

  return templateRenders;
}

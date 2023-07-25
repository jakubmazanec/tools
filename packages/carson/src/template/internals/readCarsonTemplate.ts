import {Template} from '@jakubmazanec/template';
import {readFile} from '@jakubmazanec/zod-utils';
import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'node:path';

import {parseCarsonTemplateId} from './parseCarsonTemplateId.js';
import {resolveModule} from './resolveModule.js';
import {TEMPLATES_PATH, TEMPLATE_CONFIG_FILENAME} from '../../constants.js';
import {type CarsonTemplate} from '../CarsonTemplate.js';
import {carsonTemplateConfigSchema} from '../CarsonTemplateConfig.js';
import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {templateAttributesSchema} from '../TemplateAttributes.js';

export async function readCarsonTemplate(templateId: string): Promise<CarsonTemplate> {
  let [moduleId, templateName] = parseCarsonTemplateId(templateId);
  let modulePath = await resolveModule(moduleId);
  let carsonTemplatePath = path.join(modulePath, TEMPLATES_PATH, templateName);

  if (await fs.pathExists(carsonTemplatePath)) {
    let templateConfigPath = path.join(carsonTemplatePath, TEMPLATE_CONFIG_FILENAME);
    let templateConfig = await readFile(templateConfigPath, carsonTemplateConfigSchema, {
      throwOnZodError: true,
    });
    let templateFilePaths = await glob('**/*.ejs', {
      cwd: carsonTemplatePath,
      dot: true,
    });
    let carsonTemplate: CarsonTemplate = {
      name: templateName,
      config: templateConfig,
      files: [],
    };

    for (let templateFilePath of templateFilePaths) {
      carsonTemplate.files.push(
        await Template.read(path.join(carsonTemplatePath, templateFilePath), {
          attributesSchema: templateAttributesSchema,
        }),
      );
    }

    return carsonTemplate;
  }

  throw new CarsonTemplateError('CARSON_TEMPLATE_NOT_FOUND', {
    messageParameters: [templateId, moduleId],
  });
}

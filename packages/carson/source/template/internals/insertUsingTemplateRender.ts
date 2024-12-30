import fs from 'fs-extra';
import _ from 'lodash';
import path from 'node:path';

import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {type TemplateRender} from '../TemplateRender.js';
import {prettify} from './prettify.js';

export async function insertUsingTemplateRender(templateRender: TemplateRender, basePath: string) {
  let to = path.join(basePath, templateRender.attributes.to);
  let extension = path.extname(to);

  switch (extension) {
    case '.md': {
      if (await fs.pathExists(to)) {
        let targetFile = await fs.readFile(to, {encoding: 'utf8'});
        let newContent = `<!-- ${templateRender.attributes.strategy[1]} -->${templateRender.content}<!-- ${templateRender.attributes.strategy[1]} -->`;
        let oldContentRegexp = new RegExp(
          `<!--\\s*${_.escapeRegExp(
            templateRender.attributes.strategy[1],
          )}\\s-->[\\s\\S]*<!--\\s*${_.escapeRegExp(templateRender.attributes.strategy[1])}\\s-->`,
          'u',
        );
        let newFile = targetFile.replace(oldContentRegexp, newContent);

        await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});
      }

      break;
    }

    default: {
      throw new CarsonTemplateError('STRATEGY_UNSUPPORTED_EXTENSION', {
        messageParameters: [
          templateRender.attributes.strategy,
          templateRender.template.path,
          extension,
        ],
        data: {
          path: templateRender.template.path,
        },
      });
    }
  }
}

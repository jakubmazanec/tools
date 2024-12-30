import {type Json} from '@jakubmazanec/zod-utils';
import fs from 'fs-extra';
import json from 'json5';
import path from 'node:path';
import yaml from 'yaml';

import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {type TemplateRender} from '../TemplateRender.js';
import {merge} from './merge.js';
import {prettify} from './prettify.js';

export async function mergeUsingTemplateRender(templateRender: TemplateRender, basePath: string) {
  let to = path.join(basePath, templateRender.attributes.to);
  let extension = path.extname(to);

  switch (extension) {
    case '.json': {
      if (await fs.pathExists(to)) {
        let targetFile = (await fs.readJson(to)) as Json;
        let fileToMerge = json.parse<Json>(templateRender.content);
        let newFile = JSON.stringify(merge(targetFile, fileToMerge), null, 2);

        await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});
      } else {
        await fs.writeFile(to, await prettify(templateRender.content, to), {encoding: 'utf8'});
      }

      break;
    }

    case '.yaml': {
      if (await fs.pathExists(to)) {
        let targetFile = yaml.parse(await fs.readFile(to, {encoding: 'utf8'})) as unknown;
        let fileToMerge = yaml.parse(templateRender.content) as unknown;
        let newFile = yaml.stringify(merge(targetFile, fileToMerge));

        await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});
      } else {
        await fs.writeFile(to, await prettify(templateRender.content, to), {encoding: 'utf8'});
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

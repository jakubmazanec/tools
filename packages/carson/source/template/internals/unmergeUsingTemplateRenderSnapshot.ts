import {type Json} from '@jakubmazanec/zod-utils';
import fs from 'fs-extra';
import json from 'json5';
import path from 'node:path';
import yaml from 'yaml';

import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {prettify} from './prettify.js';
import {type TemplateRenderSnapshot} from './TemplateRenderSnapshot.js';
import {unmerge} from './unmerge.js';

export async function unmergeUsingTemplateRenderSnapshot(
  templateRenderSnapshot: TemplateRenderSnapshot,
  outputPath: string,
) {
  let to = path.join(outputPath, templateRenderSnapshot.attributes.to);
  let extension = path.extname(to);

  if (!templateRenderSnapshot.content) {
    throw new CarsonTemplateError('INVALID_SNAPSHOT');
  }

  switch (extension) {
    case '.json': {
      let targetFile = (await fs.readJson(to)) as Json;
      let fileToMerge = json.parse<Json>(templateRenderSnapshot.content);
      let newFile = JSON.stringify(unmerge(targetFile, fileToMerge));

      await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});

      break;
    }

    case '.yaml': {
      let targetFile = yaml.parse(await fs.readFile(to, {encoding: 'utf8'})) as unknown;
      let fileToMerge = yaml.parse(templateRenderSnapshot.content) as unknown;
      let newFile = yaml.stringify(unmerge(targetFile, fileToMerge));

      await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});

      break;
    }

    default: {
      throw new CarsonTemplateError('INVALID_SNAPSHOT');
    }
  }
}

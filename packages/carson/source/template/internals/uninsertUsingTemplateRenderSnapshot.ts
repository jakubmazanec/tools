import fs from 'fs-extra';
import _ from 'lodash';
import path from 'node:path';

import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {prettify} from './prettify.js';
import {type TemplateRenderSnapshot} from './TemplateRenderSnapshot.js';

export async function uninsertUsingTemplateRenderSnapshot(
  templateRenderSnapshot: TemplateRenderSnapshot,
  basePath: string,
) {
  let to = path.join(basePath, templateRenderSnapshot.attributes.to);
  let extension = path.extname(to);

  switch (extension) {
    case '.md': {
      if (await fs.pathExists(to)) {
        let targetFile = await fs.readFile(to, {encoding: 'utf8'});
        let newContent = `<!-- ${templateRenderSnapshot.attributes.strategy[1]} --><!-- ${templateRenderSnapshot.attributes.strategy[1]} -->`;
        let oldContentRegexp = new RegExp(
          `<!--\\s*${_.escapeRegExp(
            templateRenderSnapshot.attributes.strategy[1],
          )}\\s-->[\\s\\S]*<!--\\s*${_.escapeRegExp(templateRenderSnapshot.attributes.strategy[1])}\\s-->`,
          'u',
        );
        let newFile = targetFile.replace(oldContentRegexp, newContent);

        await fs.writeFile(to, await prettify(newFile, to), {encoding: 'utf8'});
      }

      break;
    }

    default: {
      throw new CarsonTemplateError('INVALID_SNAPSHOT');
    }
  }
}

import fs from 'fs-extra';
import path from 'node:path';

import {CarsonTemplateError} from '../CarsonTemplateError.js';
import {prettify} from './prettify.js';
import {type TemplateRenderSnapshot} from './TemplateRenderSnapshot.js';

export type DeleteUsingTemplateRenderOptions = {
  onlyDeleteWhenContentsMatch?: boolean;
};

export async function deleteUsingTemplateRenderSnapshot(
  templateRenderSnapshot: TemplateRenderSnapshot,
  basePath: string,
  options?: DeleteUsingTemplateRenderOptions,
) {
  let to = path.join(basePath, templateRenderSnapshot.attributes.to);

  if (!(await fs.pathExists(to))) {
    return;
  }

  if (options?.onlyDeleteWhenContentsMatch) {
    if (!templateRenderSnapshot.content) {
      throw new CarsonTemplateError('INVALID_SNAPSHOT');
    }

    let existingContent = await fs.readFile(to, {encoding: 'utf8'});
    let newContent = await prettify(templateRenderSnapshot.content, to);

    if (existingContent.trim() === newContent.trim()) {
      await fs.rm(to);
    }

    return;
  }

  await fs.rm(to);
}

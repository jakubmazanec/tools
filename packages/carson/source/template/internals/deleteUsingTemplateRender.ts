import fs from 'fs-extra';
import path from 'node:path';

import {type TemplateRender} from '../TemplateRender.js';
import {prettify} from './prettify.js';
import {type TemplateRenderSnapshot} from './TemplateRenderSnapshot.js';

export type DeleteUsingTemplateRenderOptions = {
  onlyDeleteWhenContentsMatch?: boolean;
};

export async function deleteUsingTemplateRender(
  templateRender: TemplateRender | TemplateRenderSnapshot,
  basePath: string,
  options?: DeleteUsingTemplateRenderOptions,
) {
  let to = path.join(basePath, templateRender.attributes.to);

  if (!(await fs.pathExists(to))) {
    return;
  }

  if (options?.onlyDeleteWhenContentsMatch) {
    let existingContent = await fs.readFile(to, {encoding: 'utf8'});
    let newContent = await prettify(templateRender.content, to);

    if (existingContent.trim() === newContent.trim()) {
      await fs.rm(to);
    }

    return;
  }

  await fs.rm(to);
}

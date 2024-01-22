import fs from 'fs-extra';
import path from 'node:path';

import {type TemplateRender} from '../TemplateRender.js';
import {prettify} from './prettify.js';
import {type TemplateRenderSnapshot} from './TemplateRenderSnapshot.js';

export async function overwriteUsingTemplateRender(
  templateRender: TemplateRender | TemplateRenderSnapshot,
  basePath: string,
) {
  let to = path.join(basePath, templateRender.attributes.to);

  await fs.ensureDir(path.dirname(to));
  await fs.writeFile(to, await prettify(templateRender.content, to), {encoding: 'utf8'});
}

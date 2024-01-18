import {deflateSync, strToU8} from 'fflate';
import fs from 'fs-extra';

import {type TemplateRenders} from '../TemplateRenders.js';
import {type TemplateRenderSnapshots} from './TemplateRenderSnapshots.js';

export async function saveTemplateRenderSnapshots(
  templateRenders: TemplateRenders,
  templateRenderSnapshotsPath: string,
) {
  let templateRendersSnapshots: TemplateRenderSnapshots = [];

  for (let templateRender of templateRenders) {
    if (
      templateRender.attributes.strategy === 'ensure' ||
      templateRender.attributes.strategy === 'overwrite' ||
      templateRender.attributes.strategy === 'merge' ||
      templateRender.attributes.strategy[0] === 'insert'
    ) {
      templateRendersSnapshots.push({
        attributes: {
          to: templateRender.attributes.to,
          strategy: templateRender.attributes.strategy,
        },
        content: templateRender.content,
        template: templateRender.template,
      });
    }
  }

  await fs.writeFile(
    templateRenderSnapshotsPath,
    deflateSync(strToU8(JSON.stringify(templateRendersSnapshots)), {level: 1, mem: 0}),
  );
}

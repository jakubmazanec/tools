import {deflateSync, strToU8} from 'fflate';
import fs from 'fs-extra';
import path from 'node:path';
import yaml from 'yaml';

import {type TemplateRenders} from '../TemplateRenders.js';
import {simplify} from './simplify.js';
import {type TemplateRenderSnapshots} from './TemplateRenderSnapshots.js';

export async function saveTemplateRenderSnapshots(
  templateRenders: TemplateRenders,
  templateRenderSnapshotsPath: string,
) {
  let templateRendersSnapshots: TemplateRenderSnapshots = [];

  for (let templateRender of templateRenders) {
    if (
      templateRender.attributes.strategy === 'overwrite' ||
      templateRender.attributes.strategy[0] === 'insert'
    ) {
      templateRendersSnapshots.push({
        attributes: {
          to: templateRender.attributes.to,
          strategy: templateRender.attributes.strategy,
        },
      });

      continue;
    }

    if (templateRender.attributes.strategy === 'ensure') {
      templateRendersSnapshots.push({
        attributes: {
          to: templateRender.attributes.to,
          strategy: templateRender.attributes.strategy,
        },
        content: templateRender.content,
      });

      continue;
    }

    if (templateRender.attributes.strategy === 'merge') {
      let extension = path.extname(templateRender.attributes.to);
      let content;

      switch (extension) {
        case '.json': {
          content = JSON.stringify(simplify(JSON.parse(templateRender.content)));

          break;
        }

        case '.yaml': {
          content = yaml.stringify(simplify(yaml.parse(templateRender.content)));

          break;
        }

        default: {
          content = templateRender.content;
        }
      }

      templateRendersSnapshots.push({
        attributes: {
          to: templateRender.attributes.to,
          strategy: templateRender.attributes.strategy,
        },
        content,
      });

      continue;
    }
  }

  await fs.writeFile(
    templateRenderSnapshotsPath,
    deflateSync(strToU8(JSON.stringify(templateRendersSnapshots)), {level: 1, mem: 0}),
  );
}

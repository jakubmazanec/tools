import {inflateSync, strFromU8} from 'fflate';
import fs from 'fs-extra';

import {templateRenderSnapshotsSchema} from './TemplateRenderSnapshots.js';

export async function loadTemplateRenderSnapshots(templateRenderSnapshotsPath: string) {
  let compressedSnapshots = await fs.readFile(templateRenderSnapshotsPath);
  let decompressedSnapshots = inflateSync(new Uint8Array(compressedSnapshots));
  let parsingResult = templateRenderSnapshotsSchema.safeParse(
    JSON.parse(strFromU8(decompressedSnapshots)),
  );

  if (!parsingResult.success) {
    throw parsingResult.error;
  }

  return parsingResult.data;
}

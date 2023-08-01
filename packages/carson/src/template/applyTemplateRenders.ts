// TODO: can this be fixed?
/* eslint-disable complexity -- TODO */
import fs from 'fs-extra';
import path from 'node:path';
import prettier from 'prettier';

import {CarsonTemplateError} from './CarsonTemplateError.js';
import {
  createUsingTemplateRender,
  deleteUsingTemplateRender,
  insertUsingTemplateRender,
  loadTemplateRenderSnapshots,
  mergeUsingTemplateRender,
  overwriteUsingTemplateRender,
  saveTemplateRenderSnapshots,
  uninsertUsingTemplateRender,
  unmergeUsingTemplateRender,
} from './internals.js';
import {type TemplateRenders} from './TemplateRenders.js';
import {CARSON_CONFIG_DIRECTORY, SNAPSHOTS_FILENAME} from '../constants.js';

export type ApplyTemplateRendersOptions = {
  templateRenders: TemplateRenders;
  path: string;
  ignoreStrategies: string[];
};

/**
 * Applies rendered Carson template to a specified path, i.e. creates and updates files based on the result of rendering each Carson template file.
 */
export async function applyTemplateRenders({
  templateRenders,
  path: targetPath,
  ignoreStrategies,
}: ApplyTemplateRendersOptions) {
  // we need to clear Prettier cache, because we are changing file system
  await prettier.clearConfigCache();

  // first, we read the existing snapshots and use them to undo previous changes
  let templateRenderSnapshotsPath = path.join(
    targetPath,
    CARSON_CONFIG_DIRECTORY,
    SNAPSHOTS_FILENAME,
  );

  if (await fs.pathExists(templateRenderSnapshotsPath)) {
    let templateRenderSnapshots = await loadTemplateRenderSnapshots(templateRenderSnapshotsPath);

    for (let templateRenderSnapshot of templateRenderSnapshots) {
      let strategy =
        typeof templateRenderSnapshot.attributes.strategy === 'string'
          ? templateRenderSnapshot.attributes.strategy
          : templateRenderSnapshot.attributes.strategy[0];

      if (ignoreStrategies.includes(strategy)) {
        continue;
      }

      if (templateRenderSnapshot.attributes.strategy === 'ensure') {
        await deleteUsingTemplateRender(templateRenderSnapshot, targetPath, {
          onlyDeleteWhenContentsMatch: true,
        });
      }

      if (templateRenderSnapshot.attributes.strategy === 'overwrite') {
        await deleteUsingTemplateRender(templateRenderSnapshot, targetPath);
      }

      if (templateRenderSnapshot.attributes.strategy === 'merge') {
        await unmergeUsingTemplateRender(templateRenderSnapshot, targetPath);
      }

      if (templateRenderSnapshot.attributes.strategy[0] === 'insert') {
        await uninsertUsingTemplateRender(templateRenderSnapshot, targetPath);
      }
    }
  }

  // second, we apply strategies that create files
  for (let templateRender of templateRenders) {
    let strategy =
      typeof templateRender.attributes.strategy === 'string'
        ? templateRender.attributes.strategy
        : templateRender.attributes.strategy[0];

    if (ignoreStrategies.includes(strategy)) {
      continue;
    }

    if (templateRender.attributes.strategy === 'create') {
      await createUsingTemplateRender(templateRender, targetPath);
    }

    if (templateRender.attributes.strategy === 'ensure') {
      let to = path.join(targetPath, templateRender.attributes.to);
      let doesToExist = await fs.pathExists(to);

      if (!doesToExist) {
        await createUsingTemplateRender(templateRender, targetPath);
      }
    }
  }

  // third, we apply strategies that change files
  for (let templateRender of templateRenders) {
    let strategy =
      typeof templateRender.attributes.strategy === 'string'
        ? templateRender.attributes.strategy
        : templateRender.attributes.strategy[0];

    if (ignoreStrategies.includes(strategy)) {
      continue;
    }

    if (templateRender.attributes.strategy === 'overwrite') {
      await overwriteUsingTemplateRender(templateRender, targetPath);
    }

    if (templateRender.attributes.strategy === 'merge') {
      await mergeUsingTemplateRender(templateRender, targetPath);
    }

    if (templateRender.attributes.strategy[0] === 'insert') {
      await insertUsingTemplateRender(templateRender, targetPath);
    }

    if (templateRender.attributes.strategy === 'check') {
      let to = path.join(targetPath, templateRender.attributes.to);
      let doesToExist = await fs.pathExists(to);

      if (!doesToExist) {
        throw new CarsonTemplateError('STRATEGY_MISSING_FILE', {
          messageParameters: [templateRender.attributes.strategy, templateRender.template.path, to],
          data: {
            path: to,
          },
        });
      }
    }
  }

  await saveTemplateRenderSnapshots(templateRenders, templateRenderSnapshotsPath);
}

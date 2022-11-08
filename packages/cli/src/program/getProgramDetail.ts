import {type PackageJson} from '@jakubmazanec/zod-utils';

import {type ProgramDetail} from './ProgramDetail.js';

/**
 * Creates detailed information about a {@lincode Program}.
 */
export function getProgramDetail(packageJson: PackageJson) {
  let programDetail: ProgramDetail = {};

  if (packageJson.name) {
    programDetail.name = packageJson.name;
  }

  if (packageJson.version) {
    programDetail.version = packageJson.version;
  }

  if (packageJson.description) {
    programDetail.description = packageJson.description;
  }

  if (packageJson.bin && typeof packageJson.bin !== 'string') {
    let bins = Object.entries(packageJson.bin);

    if (bins.length === 1) {
      let firstBin = bins[0] as [string, string];

      [programDetail.bin] = firstBin;
    }
  }

  if (typeof packageJson.bin === 'string' && packageJson.name) {
    programDetail.bin = packageJson.name;
  }

  return programDetail;
}

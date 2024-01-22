import {describe, expect, test} from 'vitest';

import {getPackageJsonWorkspaces} from '../../source/workspace/internals.js';

describe('getPackageJsonWorkspaces()', () => {
  test.each([
    {
      caseId: 1,
      packageJson: {name: 'foobar'},
      workspaces: undefined,
    },
    {
      caseId: 2,
      packageJson: {workspaces: ['packages/*']},
      workspaces: ['packages/*'],
    },
    {
      caseId: 3,
      packageJson: {workspaces: {packages: ['packages/*']}},
      workspaces: ['packages/*'],
    },
  ])(
    'extracts correctly workspaces from package.json object (#$caseId)',
    ({packageJson, workspaces}) => {
      let result = getPackageJsonWorkspaces(packageJson);

      expect({workspaces: result}).toMatchObject({workspaces});
    },
  );
});

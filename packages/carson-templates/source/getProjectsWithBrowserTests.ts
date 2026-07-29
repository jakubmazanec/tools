import {type Workspace} from '@jakubmazanec/carson';
import glob from 'fast-glob';

import {BROWSER_TEST_GLOB} from './constants.js';

export function getProjectsWithBrowserTests(workspace: Workspace | Workspace<false>) {
  return workspace.projects.filter(
    (project) => glob.sync(BROWSER_TEST_GLOB, {cwd: project.path}).length > 0,
  );
}

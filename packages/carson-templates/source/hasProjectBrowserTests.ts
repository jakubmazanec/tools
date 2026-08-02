import {type Project} from '@jakubmazanec/carson';

import {getProjectsWithBrowserTests} from './getProjectsWithBrowserTests.js';

export function hasProjectBrowserTests(project: Project | Project<false>) {
  return getProjectsWithBrowserTests(project.workspace).some(
    (projectWithBrowserTests) => projectWithBrowserTests.path === project.path,
  );
}

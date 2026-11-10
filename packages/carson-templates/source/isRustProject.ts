import {type Project} from '@jakubmazanec/carson';

export function isRustProject(project: Project | Project<false>) {
  return project.config.template?.includes('projects/rust') ?? false;
}

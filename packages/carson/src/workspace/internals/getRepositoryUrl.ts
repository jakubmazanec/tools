import {simpleGit} from 'simple-git';

export async function getRepositoryUrl(repositoryPath: string): Promise<string | undefined> {
  let repositoryUrl: string | undefined;

  try {
    let git = simpleGit({
      baseDir: repositoryPath,
      binary: 'git',
      maxConcurrentProcesses: 1,
    });
    let {value} = await git.getConfig('remote.origin.url');

    if (value) {
      repositoryUrl = value;
    }
  } catch {
    // no-op
  }

  return repositoryUrl;
}

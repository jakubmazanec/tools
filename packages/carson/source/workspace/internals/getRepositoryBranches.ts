import {simpleGit} from 'simple-git';

const REMOTE_NAME_PREFIX_REGEXP = /^[^/]*\//iu;

export async function getRepositoryBranches(repositoryPath: string): Promise<string[] | undefined> {
  let repositoryBranches: string[] | undefined;

  try {
    let git = simpleGit({
      baseDir: repositoryPath,
      binary: 'git',
      maxConcurrentProcesses: 1,
    });

    let branchSummary = await git.branch(['-r']);

    repositoryBranches = branchSummary.all.map((branch) =>
      branch.replace(REMOTE_NAME_PREFIX_REGEXP, ''),
    );

    if (!repositoryBranches.length) {
      branchSummary = await git.branch(['-a']);

      repositoryBranches = branchSummary.all.map((branch) =>
        branch.replace(REMOTE_NAME_PREFIX_REGEXP, ''),
      );
    }
  } catch {
    // no-op
  }

  return repositoryBranches;
}

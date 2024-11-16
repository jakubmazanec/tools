import {getInfo, getInfoFromPullRequest} from '@changesets/get-github-info';
import {type NewChangeset, type VersionType} from '@changesets/types';

export type GetReleaseLineChangeset = NewChangeset & {
  commit?: string | undefined;
};

export async function getReleaseLine(
  changeset: GetReleaseLineChangeset,
  type: VersionType,
  options?: Record<string, unknown>,
) {
  if (!options?.repository) {
    throw new Error(
      'Please provide a repository in Changesets changelog setting, e.g.: "changelog": ["@jakubmazanec/changesets-changelog", { "repository": "org/repo" }]',
    );
  }

  let pullRequestFromSummary: number | undefined;
  let commitFromSummary: string | undefined;
  let usersFromSummary: string[] = [];
  let replacedChangelog = changeset.summary
    .replaceAll(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/gim, (_, rawPullRequest) => {
      let pullRequest = Number(rawPullRequest);

      if (!Number.isNaN(pullRequest)) {
        pullRequestFromSummary = pullRequest;
      }

      return '';
    })
    .replaceAll(/^\s*commit:\s*(\S+)/gim, (_, commit: string) => {
      commitFromSummary = commit;

      return '';
    })
    .replaceAll(/^\s*(?:author|user):\s*@?(\S+)/gim, (_, user: string) => {
      usersFromSummary.push(user);

      return '';
    })
    .trim();
  let [firstLine, ...lines] = replacedChangelog.split('\n').map((line) => line.trimEnd());
  let commitLink: string | undefined;
  let pullRequestLink: string | undefined;
  let usersLink: string | undefined;

  if (pullRequestFromSummary === undefined) {
    let commitToFetchFrom = commitFromSummary ?? changeset.commit;

    if (commitToFetchFrom) {
      try {
        let {links} = await getInfo({
          repo: String(options.repository),
          commit: commitToFetchFrom,
        });

        commitLink = links.commit;
        pullRequestLink = links.pull ?? undefined;
        usersLink = links.user ?? undefined;
      } catch {
        commitLink = undefined;
      }
    }
  } else {
    let {links} = await getInfoFromPullRequest({
      repo: String(options.repository),
      pull: pullRequestFromSummary,
    });

    if (commitFromSummary) {
      links = {
        ...links,
        commit: `[\`${commitFromSummary}\`](https://github.com/${options.repository}/commit/${commitFromSummary})`,
      };
    }

    commitLink = links.commit ?? undefined;
    pullRequestLink = links.pull;
    usersLink = links.user ?? undefined;
  }

  if (usersFromSummary.length) {
    usersLink = usersFromSummary
      .map((userFromSummary) => `[@${userFromSummary}](https://github.com/${userFromSummary})`)
      .join(', ');
  }

  let prefix = [
    pullRequestLink ? ` ${pullRequestLink}` : '',
    commitLink ? ` ${commitLink}` : '',
    usersLink ? ` (${usersLink})` : '',
  ].join('');

  return `\n\n-${prefix ? `${prefix} –` : ''} ${firstLine}\n${lines
    .map((line) => `  ${line}`)
    .join('\n')}`;
}

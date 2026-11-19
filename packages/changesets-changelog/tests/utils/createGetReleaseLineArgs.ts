import {parseChangesetFile} from '@changesets/parse';

export function createGetReleaseLineArgs(
  content: string,
  commit: string | undefined,
  repository: string,
) {
  return [
    {
      ...parseChangesetFile(
        `---
  pkg: "minor"
  ---

  something
  ${content}
  `,
      ),
      id: 'some-id',
      commit,
    },
    'minor',
    {repository},
  ] as const;
}

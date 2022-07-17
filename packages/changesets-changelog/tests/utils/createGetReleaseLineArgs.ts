import parse from '@changesets/parse';

export function createGetReleaseLineArgs(
  content: string,
  commit: string | undefined,
  repository: string,
) {
  return [
    {
      ...parse(
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

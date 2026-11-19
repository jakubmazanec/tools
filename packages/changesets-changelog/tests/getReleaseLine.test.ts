import {describe, expect, test, vitest} from 'vitest';

import {getReleaseLine} from '../source/getReleaseLine.js';
import {createGetReleaseLineArgs} from './utils/createGetReleaseLineArgs.js';

function getMockGithubData() {
  return {
    commit: '03ee332',
    user: 'jakubmazanec',
    pull: 7853,
    repository: 'jakubmazanec/js-tools',
  };
}

// TODO: figure out how to refactor this
// eslint-disable-next-line vitest/require-hook -- needed
let mockGithubData = getMockGithubData();

vitest.mock(import('@changesets/get-github-info'), () => {
  let {user, pull, commit, repository} = getMockGithubData();
  let info = {
    author: {
      login: user,
      url: `https://github.com/${user}`,
      markdownLink: `[@${user}](https://github.com/${user})`,
    },
    pull: {
      // eslint-disable-next-line id-denylist -- required by `@changesets/get-github-info` types
      number: pull,
      url: `https://github.com/${repository}/pull/${pull}`,
      markdownLink: `[#${pull}](https://github.com/${repository}/pull/${pull})`,
    },
    commit: {
      sha: commit,
      url: `https://github.com/${repository}/commit/${commit}`,
      markdownLink: `[\`${commit}\`](https://github.com/${repository}/commit/${commit})`,
    },
  };

  return {
    async getCommitInfo() {
      return info;
    },
    async getPullRequestInfo() {
      return info;
    },
  };
});

describe('getReleaseLine()', () => {
  describe.each([mockGithubData.commit, 'invalidcommit', undefined])(
    'with commit %s...',
    (commit) => {
      describe.each(['pr', 'pull request', 'pull'])(
        'with PR overriden using keyword "%s"...',
        (keyword) => {
          describe.each(['with "#"', 'without "#"'] as const)('%s...', (kind) => {
            test('works', async () => {
              await expect(
                getReleaseLine(
                  ...createGetReleaseLineArgs(
                    `${keyword}: ${kind === 'with "#"' ? '#' : ''}${mockGithubData.pull}`,
                    commit,
                    mockGithubData.repository,
                  ),
                ),
              ).resolves.toBe(
                '\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [`03ee332`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec)) – something\n',
              );
            });
          });
        },
      );

      describe('with commit overriden using keyword "commit"...', () => {
        test('works', async () => {
          await expect(
            getReleaseLine(
              ...createGetReleaseLineArgs(
                `commit: ${mockGithubData.commit}`,
                commit,
                mockGithubData.repository,
              ),
            ),
          ).resolves.toBe(
            '\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [`03ee332`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec)) – something\n',
          );
        });
      });
    },
  );

  describe.each(['author', 'user'])('with author overriden using keyword "%s"...', (keyword) => {
    describe.each(['with "@"', 'without "@"'] as const)('%s...', (kind) => {
      test('works', async () => {
        await expect(
          getReleaseLine(
            ...createGetReleaseLineArgs(
              `${keyword}: ${kind === 'with "@"' ? '@' : ''}someoneelse`,
              mockGithubData.commit,
              mockGithubData.repository,
            ),
          ),
        ).resolves.toBe(
          '\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [`03ee332`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@someoneelse](https://github.com/someoneelse)) – something\n',
        );
      });
    });
  });

  test('works with multiple authors', async () => {
    await expect(
      getReleaseLine(
        ...createGetReleaseLineArgs(
          ['author: @jakubmazanec', 'author: @foobar'].join('\n'),
          mockGithubData.commit,
          mockGithubData.repository,
        ),
      ),
    ).resolves.toBe(
      '\n\n- [#7853](https://github.com/jakubmazanec/js-tools/pull/7853) [`03ee332`](https://github.com/jakubmazanec/js-tools/commit/03ee332) ([@jakubmazanec](https://github.com/jakubmazanec), [@foobar](https://github.com/foobar)) – something\n',
    );
  });
});

import {getInfo} from '@changesets/get-github-info';
import {type ModCompWithPackage, type NewChangesetWithCommit} from '@changesets/types';

export async function getDependencyReleaseLine(
  changesets: NewChangesetWithCommit[],
  updatedDependencies: ModCompWithPackage[],
  options?: Record<string, unknown>,
) {
  if (!options?.repository) {
    throw new Error(
      'Please provide a repository in Changesets changelog setting, e.g.: "changelog": ["@jakubmazanec/changesets-changelog", { "repository": "org/repo" }]',
    );
  }

  if (!updatedDependencies.length) {
    return '';
  }

  const changesetLink = `- Updated dependencies [${(
    await Promise.all(
      changesets.map(async (changeset) => {
        if (changeset.commit) {
          let {links} = await getInfo({
            repo: String(options.repository),
            commit: changeset.commit,
          });

          return links.commit;
        }

        return undefined;
      }),
    )
  )
    .filter((_) => _)
    .join(', ')}]:`;

  let updatedDepenenciesLines = updatedDependencies.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  return [changesetLink, ...updatedDepenenciesLines].join('\n');
}

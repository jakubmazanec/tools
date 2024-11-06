import semver from 'semver';

/**
 * Defines sort order between two SemVer strings.
 *
 * @param a The first SemVer string.
 * @param b The second SemvEr string.
 * @returns Number whose positivity indicates the relative order of the two elements.
 */
export function compareSemver(a: string, b: string) {
  let firstSemver =
    semver.validRange(a) ?
      (semver.minVersion(a)?.format() ?? semver.coerce(a)?.format() ?? '0.0.0')
    : '0.0.0';
  let secondSemver =
    semver.validRange(b) ?
      (semver.minVersion(b)?.format() ?? semver.coerce(b)?.format() ?? '0.0.0')
    : '0.0.0';

  let comparison = semver.compare(firstSemver, secondSemver);

  if (comparison === 0 && (a !== firstSemver || b !== secondSemver)) {
    if (a !== firstSemver && b !== secondSemver) {
      return b.localeCompare(a);
    }

    if (a !== firstSemver) {
      return 1;
    }

    if (b !== secondSemver) {
      return -1;
    }
  }

  return comparison;
}

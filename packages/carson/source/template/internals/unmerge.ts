/**
 * Reverts {@link merge}.
 */
export function unmerge(a: unknown, b: unknown) {
  if (b === undefined || b == null) {
    return a;
  }

  if (typeof b !== 'object' || Array.isArray(b)) {
    return a;
  }

  if (a === undefined || a == null) {
    return a;
  }

  if (typeof a !== 'object' || Array.isArray(a)) {
    return a;
  }

  const newA: Record<string, unknown> = {};

  for (let [key] of Object.entries(a)) {
    if (!Object.hasOwn(b, key)) {
      newA[key] = (a as Record<string, unknown>)[key];

      continue;
    } else if (
      (a as Record<string, unknown>)[key] &&
      typeof (a as Record<string, unknown>)[key] === 'object' &&
      !Array.isArray((a as Record<string, unknown>)[key]) &&
      (b as Record<string, unknown>)[key] &&
      typeof (b as Record<string, unknown>)[key] === 'object' &&
      !Array.isArray((b as Record<string, unknown>)[key])
    ) {
      const result = unmerge(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key],
      );

      if (Object.keys(result as Record<string, unknown>).length > 0) {
        newA[key] = result;
      }
    }
  }

  return newA;
}

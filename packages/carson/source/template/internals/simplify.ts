/**
 * Simplifies JSON for usage in snapshots: string, number or boolean values are replaced with `null`.
 */
export function simplify(a: unknown) {
  if (a === undefined || a == null) {
    return null;
  }

  if (typeof a !== 'object' || Array.isArray(a)) {
    return null;
  }

  const newA: Record<string, unknown> = {...a};

  for (let [key] of Object.entries(a)) {
    if (
      (a as Record<string, unknown>)[key] &&
      typeof (a as Record<string, unknown>)[key] === 'object' &&
      !Array.isArray((a as Record<string, unknown>)[key])
    ) {
      const result = simplify((a as Record<string, unknown>)[key]);

      newA[key] = result;
    } else {
      newA[key] = null;
    }
  }

  return newA;
}

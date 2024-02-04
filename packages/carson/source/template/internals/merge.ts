/**
 * Merges two JSON-like variables. Only simple objects, not arrays, are merged recursively.
 */
export function merge(a: unknown, b: unknown) {
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

  const newA: Record<string, unknown> = {...a};

  for (let [key, value] of Object.entries(b)) {
    if (
      (a as Record<string, unknown>)[key] &&
      typeof (a as Record<string, unknown>)[key] === 'object' &&
      !Array.isArray((a as Record<string, unknown>)[key]) &&
      (b as Record<string, unknown>)[key] &&
      typeof (b as Record<string, unknown>)[key] === 'object' &&
      !Array.isArray((b as Record<string, unknown>)[key])
    ) {
      const result = merge(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key],
      );

      newA[key] = result;
    } else {
      newA[key] = value;
    }
  }

  return newA;
}

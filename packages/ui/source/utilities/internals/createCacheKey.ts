export function createCacheKey(
  type: string,
  locales: readonly string[],
  options?: Intl.DateTimeFormatOptions | Intl.NumberFormatOptions,
) {
  let localeKey = locales.join('-');

  return `${type}-${localeKey}-${JSON.stringify(options)}`;
}

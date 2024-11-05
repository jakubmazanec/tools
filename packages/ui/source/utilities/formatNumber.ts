import {createCacheKey, getMemoized, normalizeLocales} from './internals.js';
import {type WithLocaleOrLocales} from './WithLocaleOrLocales.js';

export type FormatNumberOptions = Intl.NumberFormatOptions & WithLocaleOrLocales;

export function formatNumber(value: number, options: FormatNumberOptions): string {
  let normalizedLocales = normalizeLocales(options);

  let formatter = getMemoized(
    () => createCacheKey('number', normalizedLocales, options),
    () => new Intl.NumberFormat(normalizedLocales, options),
  );

  return formatter.format(value);
}

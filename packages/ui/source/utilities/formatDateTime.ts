import {createCacheKey, getMemoized, normalizeLocales} from './internals.js';
import {type WithLocaleOrLocales} from './WithLocaleOrLocales.js';

export type FormatDateTimeOptions = Intl.DateTimeFormatOptions & WithLocaleOrLocales;

export function formatDateTime(value: Date | string, options: FormatDateTimeOptions): string {
  let normalizedLocales = normalizeLocales(options);

  let formatter = getMemoized(
    () => createCacheKey('date', normalizedLocales, options),
    () => new Intl.DateTimeFormat(normalizedLocales, options),
  );

  return formatter.format(typeof value === 'string' ? new Date(value) : value);
}

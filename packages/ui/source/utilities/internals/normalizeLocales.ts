import {type WithLocaleOrLocales} from '../WithLocaleOrLocales.js';

let defaultLocale = 'en';

export function normalizeLocales(options: WithLocaleOrLocales): string[] {
  if ('locale' in options) {
    return [options.locale];
  }

  if ('locales' in options) {
    return [...options.locales];
  }

  return [defaultLocale];
}

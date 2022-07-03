import {GRAPHQL_EXTENSIONS_REGEXP} from '../constants';

export const interfaceVersion = 2;

export function resolve(source: string): {found: boolean; path?: unknown} {
  if (GRAPHQL_EXTENSIONS_REGEXP.test(source)) {
    return {found: true, path: null};
  }

  return {found: false};
}

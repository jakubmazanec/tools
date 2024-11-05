import {type ElementType, Fragment} from 'react';

export function filterProps<
  const T extends Record<string, unknown> & {as?: ElementType | undefined},
>(props: T): T {
  if (props.as === Fragment) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- false positive
    return {} as T;
  }

  return props;
}

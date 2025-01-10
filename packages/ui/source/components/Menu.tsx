import {Menu as HeadlessMenu, type MenuProps as HeadlessMenuProps} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  Fragment,
  type PropsWithChildren,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useMenuTheme = createComponentTheme('Menu');

const MENU_ELEMENT = Fragment;

export type MenuProps<T extends ElementType> = ComponentProps<typeof useMenuTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function Menu<T extends ElementType = typeof MENU_ELEMENT>({
  as = MENU_ELEMENT as unknown as T,
  className,
  ref,
  children,
  ...rest
}: MenuProps<T>) {
  let theme = useMenuTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed because of type of `as`
  let props: HeadlessMenuProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'menu',
    ...rest,
  });

  return <HeadlessMenu {...props}>{children}</HeadlessMenu>;
}

export const menuTheme: ComponentTheme<typeof useMenuTheme> = {
  className: null,
};

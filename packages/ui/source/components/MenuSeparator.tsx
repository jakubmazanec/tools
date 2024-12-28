import {
  MenuSeparator as HeadlessMenuSeparator,
  type MenuSeparatorProps as HeadlessMenuSeparatorProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useMenuSeparatorTheme = createComponentTheme('MenuSeparator');

const MENU_SEPARATOR_ELEMENT = 'div';

export type MenuSeparatorProps<T extends ElementType> = ComponentProps<
  typeof useMenuSeparatorTheme
> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const MenuSeparator = <T extends ElementType = typeof MENU_SEPARATOR_ELEMENT>({
  as = MENU_SEPARATOR_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: MenuSeparatorProps<T>) => {
  let theme = useMenuSeparatorTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessMenuSeparatorProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'menu-separator',
    ...rest,
  });

  return <HeadlessMenuSeparator {...props}>{children}</HeadlessMenuSeparator>;
};

export const menuSeparatorTheme: ComponentTheme<typeof useMenuSeparatorTheme> = {
  className: 'h-0 border-b-2 border-neutral-50 bg-transparent',
};

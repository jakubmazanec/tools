import {
  MenuHeading as HeadlessMenuHeading,
  type MenuHeadingProps as HeadlessMenuHeadingProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useMenuHeadingTheme = createComponentTheme('MenuHeading');

const MENU_HEADING_ELEMENT = 'div';

export type MenuHeadingProps<T extends ElementType> = ComponentProps<typeof useMenuHeadingTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function MenuHeading<T extends ElementType = typeof MENU_HEADING_ELEMENT>({
  as = MENU_HEADING_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: MenuHeadingProps<T>) {
  let theme = useMenuHeadingTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessMenuHeadingProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'menu-heading',
    ...rest,
  });

  return <HeadlessMenuHeading {...props}>{children}</HeadlessMenuHeading>;
}

export const menuHeadingTheme: ComponentTheme<typeof useMenuHeadingTheme> = {
  className: 'p-1 rounded-1 text-neutral-800 text-xs uppercase font-medium',
};

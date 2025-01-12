import {
  MenuSection as HeadlessMenuSection,
  type MenuSectionProps as HeadlessMenuSectionProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useMenuSectionTheme = createComponentTheme('MenuSection');

const MENU_SECTION_ELEMENT = 'div';

export type MenuSectionProps<T extends ElementType> = ComponentProps<typeof useMenuSectionTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function MenuSection<T extends ElementType = typeof MENU_SECTION_ELEMENT>({
  as = MENU_SECTION_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: MenuSectionProps<T>) {
  let theme = useMenuSectionTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessMenuSectionProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'menu-section',
    ...rest,
  });

  return <HeadlessMenuSection {...props}>{children}</HeadlessMenuSection>;
}

export const menuSectionTheme: ComponentTheme<typeof useMenuSectionTheme> = {
  className: 'flex flex-col gap-y-1',
};

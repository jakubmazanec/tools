import {
  MenuSection as HeadlessMenuSection,
  type MenuSectionProps as HeadlessMenuSectionProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {filterProps, forwardRef} from './internals.js';

export const useMenuSectionTheme = createComponentTheme('MenuSection');

const MENU_SECTION_ELEMENT = 'div';

export type MenuSectionProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useMenuSectionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const MenuSection = forwardRef(
  <T extends ElementType = typeof MENU_SECTION_ELEMENT>(
    {as = MENU_SECTION_ELEMENT as T, className, children, ...rest}: MenuSectionProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
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
  },
);

export const menuSectionTheme: ComponentTheme<typeof useMenuSectionTheme> = {
  className: 'flex flex-col gap-y-1',
};

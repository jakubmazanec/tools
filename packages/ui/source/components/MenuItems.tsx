import {
  MenuItems as HeadlessMenuItems,
  type MenuItemsProps as HeadlessMenuItemsProps,
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

export const useMenuItemsTheme = createComponentTheme('MenuItems');

const MENU_ITEMS_ELEMENT = 'div';

export type MenuItemsProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useMenuItemsTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      anchor?: HeadlessMenuItemsProps['anchor'] | undefined;
      className?: string;
    }
>;

export const MenuItems = forwardRef(
  <T extends ElementType = typeof MENU_ITEMS_ELEMENT>(
    {
      as = MENU_ITEMS_ELEMENT as T,
      anchor = 'bottom start',
      className,
      children,
      ...rest
    }: MenuItemsProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useMenuItemsTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessMenuItemsProps<any> = filterProps({
      as,
      ref,
      anchor,
      className: theme(null, className),
      transition: true,
      'data-component': 'menu-items',
      ...rest,
    });

    return <HeadlessMenuItems {...props}>{children}</HeadlessMenuItems>;
  },
);

export const menuItemsTheme: ComponentTheme<typeof useMenuItemsTheme> = {
  className:
    'flex flex-col gap-y-1 shadow p-1 z-30 rounded-2 border-2 border-neutral-100 hover:border-neutral-200 bg-white text-left [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] [scrollbar-width:thin] empty:invisible transition-colors',
};

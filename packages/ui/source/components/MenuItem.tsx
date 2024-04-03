import {
  MenuItem as HeadlessMenuItem,
  type MenuItemProps as HeadlessMenuItemProps,
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

export const useMenuItemTheme = createComponentTheme('MenuItem', {
  variants: {
    disabled: [true, false],
  },
});

const MENU_ITEM_ELEMENT = 'div';

export type MenuItemProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useMenuItemTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const MenuItem = forwardRef(
  <T extends ElementType = typeof MENU_ITEM_ELEMENT>(
    {disabled = false, as = MENU_ITEM_ELEMENT as T, className, children, ...rest}: MenuItemProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useMenuItemTheme({disabled});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessMenuItemProps<any> = filterProps({
      as,
      ref,
      disabled,
      className: theme(null, className),
      'data-component': 'menu-item',
      ...rest,
    });

    return <HeadlessMenuItem {...props}>{children}</HeadlessMenuItem>;
  },
);

export const menuItemTheme: ComponentTheme<typeof useMenuItemTheme> = {
  className:
    'p-1 rounded-1 text-neutral-950 hover:bg-neutral-50 data-[active]:bg-neutral-50 text-sm transition-colors',
  variants: {
    disabled: {
      true: 'text-neutral-200 hover:bg-transparent',
      false: '',
    },
  },
};

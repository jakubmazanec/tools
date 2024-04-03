import {Menu as HeadlessMenu, type MenuProps as HeadlessMenuProps} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  Fragment,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {filterProps, forwardRef} from './internals.js';

export const useMenuTheme = createComponentTheme('Menu');

const MENU_ELEMENT = Fragment;

export type MenuProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useMenuTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Menu = forwardRef(
  <T extends ElementType = typeof MENU_ELEMENT>(
    {as = MENU_ELEMENT as unknown as T, className, children, ...rest}: MenuProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
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
  },
);

export const menuTheme: ComponentTheme<typeof useMenuTheme> = {
  className: null,
};

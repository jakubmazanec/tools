import {
  MenuButton as HeadlessMenuButton,
  type MenuButtonProps as HeadlessMenuButtonProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useMenuButtonTheme = createComponentTheme('MenuButton', {
  variants: {
    disabled: [true, false],
  },
});

const MENU_BUTTON_ELEMENT = 'button';

export type MenuButtonProps<T extends ElementType> = ComponentProps<typeof useMenuButtonTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function MenuButton<T extends ElementType = typeof MENU_BUTTON_ELEMENT>({
  disabled = false,
  as = MENU_BUTTON_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: MenuButtonProps<T>) {
  let theme = useMenuButtonTheme({disabled});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessMenuButtonProps<any> = filterProps({
    as,
    ref,
    disabled,
    className: theme(null, className),
    'data-component': 'menu-button',
    ...rest,
  });

  return <HeadlessMenuButton {...props}>{children}</HeadlessMenuButton>;
}

export const menuButtonTheme: ComponentTheme<typeof useMenuButtonTheme> = {
  className: 'text-sm',
  variants: {
    disabled: {
      true: '',
      false: '',
    },
  },
};

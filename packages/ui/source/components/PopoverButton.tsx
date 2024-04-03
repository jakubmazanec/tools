import {
  PopoverButton as HeadlessPopoverButton,
  type PopoverButtonProps as HeadlessPopoverButtonProps,
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

export const usePopoverButtonTheme = createComponentTheme('PopoverButton', {
  variants: {
    disabled: [true, false],
  },
});

const POPOVER_BUTTON_ELEMENT = 'div';

export type PopoverButtonProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof usePopoverButtonTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      autoFocus?: boolean | undefined;
      className?: string;
    }
>;

export const PopoverButton = forwardRef(
  <T extends ElementType = typeof POPOVER_BUTTON_ELEMENT>(
    {
      disabled = false,
      as = POPOVER_BUTTON_ELEMENT as T,
      autoFocus,
      className,
      children,
      ...rest
    }: PopoverButtonProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = usePopoverButtonTheme({disabled});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessPopoverButtonProps<any> = filterProps({
      as,
      ref,
      disabled,
      autoFocus,
      className: theme(null, className),
      'data-component': 'popover-button',
      ...rest,
    });

    return <HeadlessPopoverButton {...props}>{children}</HeadlessPopoverButton>;
  },
);

export const popoverButtonTheme: ComponentTheme<typeof usePopoverButtonTheme> = {
  className: '',
  variants: {
    disabled: {
      true: '',
      false: '',
    },
  },
};

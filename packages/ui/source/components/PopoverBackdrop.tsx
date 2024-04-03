import {
  PopoverBackdrop as HeadlessPopoverBackdrop,
  type PopoverBackdropProps as HeadlessPopoverBackdropProps,
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

export const usePopoverBackdropTheme = createComponentTheme('PopoverBackdrop');

const POPOVER_BACKDROP_ELEMENT = 'div';

export type PopoverBackdropProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof usePopoverBackdropTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const PopoverBackdrop = forwardRef(
  <T extends ElementType = typeof POPOVER_BACKDROP_ELEMENT>(
    {as = POPOVER_BACKDROP_ELEMENT as T, className, children, ...rest}: PopoverBackdropProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = usePopoverBackdropTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessPopoverBackdropProps<any> = filterProps({
      as,
      ref,
      className: theme(null, className),
      'data-component': 'popover-backdrop',
      ...rest,
    });

    return <HeadlessPopoverBackdrop {...props}>{children}</HeadlessPopoverBackdrop>;
  },
);

export const popoverBackdropTheme: ComponentTheme<typeof usePopoverBackdropTheme> = {
  className: '',
};

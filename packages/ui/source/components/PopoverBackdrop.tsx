import {
  PopoverBackdrop as HeadlessPopoverBackdrop,
  type PopoverBackdropProps as HeadlessPopoverBackdropProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const usePopoverBackdropTheme = createComponentTheme('PopoverBackdrop');

const POPOVER_BACKDROP_ELEMENT = 'div';

export type PopoverBackdropProps<T extends ElementType> = ComponentProps<
  typeof usePopoverBackdropTheme
> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function PopoverBackdrop<T extends ElementType = typeof POPOVER_BACKDROP_ELEMENT>({
  as = POPOVER_BACKDROP_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: PopoverBackdropProps<T>) {
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
}

export const popoverBackdropTheme: ComponentTheme<typeof usePopoverBackdropTheme> = {
  className: '',
};

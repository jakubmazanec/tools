import {
  PopoverGroup as HeadlessPopoverGroup,
  type PopoverGroupProps as HeadlessPopoverGroupProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const usePopoverGroupTheme = createComponentTheme('PopoverGroup');

const POPOVER_GROUP_ELEMENT = 'div';

export type PopoverGroupProps<T extends ElementType> = ComponentProps<typeof usePopoverGroupTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function PopoverGroup<T extends ElementType = typeof POPOVER_GROUP_ELEMENT>({
  as = POPOVER_GROUP_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: PopoverGroupProps<T>) {
  let theme = usePopoverGroupTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessPopoverGroupProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'popover-group',
    ...rest,
  });

  return <HeadlessPopoverGroup {...props}>{children}</HeadlessPopoverGroup>;
}

export const popoverGroupTheme: ComponentTheme<typeof usePopoverGroupTheme> = {
  className: '',
};

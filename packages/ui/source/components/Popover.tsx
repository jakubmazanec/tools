import {
  Popover as HeadlessPopover,
  type PopoverProps as HeadlessPopoverProps,
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

export const usePopoverTheme = createComponentTheme('Popover');

const POPOVER_ELEMENT = 'div';

export type PopoverProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof usePopoverTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Popover = forwardRef(
  <T extends ElementType = typeof POPOVER_ELEMENT>(
    {as = POPOVER_ELEMENT as T, className, children, ...rest}: PopoverProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = usePopoverTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessPopoverProps<any> = filterProps({
      as,
      ref,
      className: theme(null, className),
      'data-component': 'popover',
      ...rest,
    });

    return <HeadlessPopover {...props}>{children}</HeadlessPopover>;
  },
);

export const popoverTheme: ComponentTheme<typeof usePopoverTheme> = {
  className: '',
};

import {
  PopoverGroup as HeadlessPopoverGroup,
  type PopoverGroupProps as HeadlessPopoverGroupProps,
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

export const usePopoverGroupTheme = createComponentTheme('PopoverGroup');

const POPOVER_GROUP_ELEMENT = 'div';

export type PopoverGroupProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof usePopoverGroupTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const PopoverGroup = forwardRef(
  <T extends ElementType = typeof POPOVER_GROUP_ELEMENT>(
    {as = POPOVER_GROUP_ELEMENT as T, className, children, ...rest}: PopoverGroupProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
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
  },
);

export const popoverGroupTheme: ComponentTheme<typeof usePopoverGroupTheme> = {
  className: '',
};

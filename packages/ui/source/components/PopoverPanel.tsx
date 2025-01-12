import {
  PopoverPanel as HeadlessPopoverPanel,
  type PopoverPanelProps as HeadlessPopoverPanelProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const usePopoverPanelTheme = createComponentTheme('PopoverPanel');

const POPOVER_PANEL_ELEMENT = 'div';

export type PopoverPanelProps<T extends ElementType> = ComponentProps<typeof usePopoverPanelTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    static?: boolean | undefined;
    anchor?: HeadlessPopoverPanelProps['anchor'] | undefined;
    className?: string;
  };

export function PopoverPanel<T extends ElementType = typeof POPOVER_PANEL_ELEMENT>({
  as = POPOVER_PANEL_ELEMENT as T,
  static: isStatic,
  anchor = 'bottom start',
  className,
  ref,
  children,
  ...rest
}: PopoverPanelProps<T>) {
  let theme = usePopoverPanelTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessPopoverPanelProps<any> = filterProps({
    as,
    ref,
    static: isStatic,
    anchor,
    className: theme(null, className),
    transition: true,
    'data-component': 'popover-panel',
    ...rest,
  });

  return <HeadlessPopoverPanel {...props}>{children}</HeadlessPopoverPanel>;
}

export const popoverPanelTheme: ComponentTheme<typeof usePopoverPanelTheme> = {
  className:
    'rounded-2 bg-white border-2 p-4 border-neutral-100 z-30 [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] [scrollbar-width:thin]',
};

import {
  DialogPanel as HeadlessDialogPanel,
  type DialogPanelProps as HeadlessDialogPanelProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useDialogPanelTheme = createComponentTheme('DialogPanel');

const DIALOG_PANEL_ELEMENT = 'div';

export type DialogPanelProps<T extends ElementType> = ComponentProps<typeof useDialogPanelTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const DialogPanel = <T extends ElementType = typeof DIALOG_PANEL_ELEMENT>({
  as = DIALOG_PANEL_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: DialogPanelProps<T>) => {
  let theme = useDialogPanelTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessDialogPanelProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    transition: true,
    'data-component': 'dialog-panel',
    ...rest,
  });

  return <HeadlessDialogPanel {...props}>{children}</HeadlessDialogPanel>;
};

export const dialogPanelTheme: ComponentTheme<typeof useDialogPanelTheme> = {
  className:
    'shadow-1 relative flex w-full min-w-[300px] max-w-[900px] flex-col gap-y-6 rounded-4 bg-white p-6 max-h-[calc(100vh-3rem)] overflow-hidden overflow-y-auto',
};

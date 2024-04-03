import {
  Dialog as HeadlessDialog,
  DialogBackdrop as HeadlessDialogBackdrop,
  type DialogProps as HeadlessDialogProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
  useCallback,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {filterProps, forwardRef} from './internals.js';

export const useDialogTheme = createComponentTheme('Dialog', {
  elements: ['root', 'backdrop'],
});

const DIALOG_ELEMENT = 'div';

export type DialogProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useDialogTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      open: boolean;
      static?: boolean | undefined;
      autoFocus?: boolean | undefined;
      className?: string;
      onClose?: () => void;
    }
>;

export const Dialog = forwardRef(
  <T extends ElementType = typeof DIALOG_ELEMENT>(
    {
      as = DIALOG_ELEMENT as T,
      open,
      static: isStatic,
      autoFocus,
      className,
      onClose,
      children,
      ...rest
    }: DialogProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useDialogTheme();

    let handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessDialogProps<any> = filterProps({
      as,
      ref,
      open,
      static: isStatic,
      transition: true,
      onClose: handleClose,
      'data-component': 'dialog',
      ...rest,
    });

    return (
      <HeadlessDialog {...props}>
        <HeadlessDialogBackdrop transition className={theme.backdrop('fixed inset-0')} />
        <div className={theme.root('fixed inset-0', className)}>{children}</div>
      </HeadlessDialog>
    );
  },
);

export const dialogTheme: ComponentTheme<typeof useDialogTheme> = {
  classNames: {
    root: 'flex w-screen items-center justify-center p-4 z-30',
    backdrop: 'bg-black/30 z-30',
  },
};

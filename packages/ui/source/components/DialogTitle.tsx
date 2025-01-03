import {
  DialogTitle as HeadlessDialogTitle,
  type DialogTitleProps as HeadlessDialogTitleProps,
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

export const useDialogTitleTheme = createComponentTheme('DialogTitle');

const DIALOG_TITLE_ELEMENT = 'h2';

export type DialogTitleProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useDialogTitleTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const DialogTitle = forwardRef(
  <T extends ElementType = typeof DIALOG_TITLE_ELEMENT>(
    {as = DIALOG_TITLE_ELEMENT as T, className, children, ...rest}: DialogTitleProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useDialogTitleTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessDialogTitleProps<any> = filterProps({
      as,
      ref,
      className: theme(null, className),
      'data-component': 'dialog-title',
      ...rest,
    });

    return <HeadlessDialogTitle {...props}>{children}</HeadlessDialogTitle>;
  },
);

export const dialogTitleTheme: ComponentTheme<typeof useDialogTitleTheme> = {
  className: 'text-xl font-bold',
};

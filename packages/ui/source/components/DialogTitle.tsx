import * as react from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useDialogTitleTheme = createComponentTheme('DialogTitle');

const DIALOG_TITLE_ELEMENT = 'h2';

export type DialogTitleProps<T extends ElementType> = ComponentProps<typeof useDialogTitleTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const DialogTitle = <T extends ElementType = typeof DIALOG_TITLE_ELEMENT>({
  as = DIALOG_TITLE_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: DialogTitleProps<T>) => {
  let theme = useDialogTitleTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: react.DialogTitleProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'dialog-title',
    ...rest,
  });

  return <react.DialogTitle {...props}>{children}</react.DialogTitle>;
};

export const dialogTitleTheme: ComponentTheme<typeof useDialogTitleTheme> = {
  className: 'text-xl font-bold',
};

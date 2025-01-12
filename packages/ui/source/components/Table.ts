import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';

export const useTableTheme = createComponentTheme('Table');

const TABLE_ELEMENT = 'table';

export type TableProps<T extends ElementType> = ComponentProps<typeof useTableTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string | undefined;
  };

export function Table<T extends ElementType = typeof TABLE_ELEMENT>({
  as: Component = TABLE_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableProps<T>) {
  let theme = useTableTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table',
    ...rest,
  };

  return createElement(Component, props, children);
}

export const tableTheme: ComponentTheme<typeof useTableTheme> = {
  className: '',
};

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

export const useTableHeadTheme = createComponentTheme('TableHead');

const TABLE_HEAD_ELEMENT = 'thead';

export type TableHeadProps<T extends ElementType> = ComponentProps<typeof useTableHeadTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function TableHead<T extends ElementType = typeof TABLE_HEAD_ELEMENT>({
  as: Component = TABLE_HEAD_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableHeadProps<T>) {
  let theme = useTableHeadTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table-head',
    ...rest,
  };

  return createElement(Component, props, children);
}

export const tableHeadTheme: ComponentTheme<typeof useTableHeadTheme> = {
  className: 'font-sans border-t-2 border-b-2 border-neutral-100',
};

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

export const useTableCellTheme = createComponentTheme('TableCell');

const TABLE_CELL_ELEMENT = 'td';

export type TableCellProps<T extends ElementType> = ComponentProps<typeof useTableCellTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function TableCell<T extends ElementType = typeof TABLE_CELL_ELEMENT>({
  as: Component = TABLE_CELL_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableCellProps<T>) {
  let theme = useTableCellTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table-cell',
    ...rest,
  };

  return createElement(Component, props, children);
}

export const tableCellTheme: ComponentTheme<typeof useTableCellTheme> = {
  className: 'px-1 py-2 text-sm font-sans tabular-nums text-right truncate',
};

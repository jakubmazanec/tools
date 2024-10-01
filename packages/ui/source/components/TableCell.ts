import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {forwardRef} from './internals.js';

export const useTableCellTheme = createComponentTheme('TableCell');

const TABLE_CELL_ELEMENT = 'td';

export type TableCellProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableCellTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableCell = forwardRef(
  <T extends ElementType = typeof TABLE_CELL_ELEMENT>(
    {as: Component = TABLE_CELL_ELEMENT as T, className, children, ...rest}: TableCellProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableCellTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-cell',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableCellTheme: ComponentTheme<typeof useTableCellTheme> = {
  className: 'p-2 text-sm font-sans tabular-nums text-right truncate',
};

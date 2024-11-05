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

export const useTableRowTheme = createComponentTheme('TableRow');

const TABLE_ROW_ELEMENT = 'tr';

export type TableRowProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableRowTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableRow = forwardRef(
  <T extends ElementType = typeof TABLE_ROW_ELEMENT>(
    {as: Component = TABLE_ROW_ELEMENT as T, className, children, ...rest}: TableRowProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableRowTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-row',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableRowTheme: ComponentTheme<typeof useTableRowTheme> = {
  className: 'font-sans odd:bg-white even:bg-neutral-25',
};

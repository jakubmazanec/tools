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

export const useTableHeaderTheme = createComponentTheme('TableHeader');

const TABLE_HEADER_ELEMENT = 'th';

export type TableHeaderProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableHeaderTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableHeader = forwardRef(
  <T extends ElementType = typeof TABLE_HEADER_ELEMENT>(
    {as: Component = TABLE_HEADER_ELEMENT as T, className, children, ...rest}: TableHeaderProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableHeaderTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-header',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableHeaderTheme: ComponentTheme<typeof useTableHeaderTheme> = {
  className: 'relative p-1 text-sm font-medium z-20 font-sans tabular-nums whitespace-nowrap',
};

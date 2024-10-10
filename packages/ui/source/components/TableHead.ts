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

export const useTableHeadTheme = createComponentTheme('TableHead');

const TABLE_HEAD_ELEMENT = 'thead';

export type TableHeadProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableHeadTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableHead = forwardRef(
  <T extends ElementType = typeof TABLE_HEAD_ELEMENT>(
    {as: Component = TABLE_HEAD_ELEMENT as T, className, children, ...rest}: TableHeadProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableHeadTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-head',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableHeadTheme: ComponentTheme<typeof useTableHeadTheme> = {
  className: 'font-sans border-b-2 border-neutral-100',
};

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
import {filterProps, forwardRef} from './internals.js';

export const useTableFootTheme = createComponentTheme('TableFoot');

const TABLE_FOOT_ELEMENT = 'tfoot';

export type TableFootProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableFootTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableFoot = forwardRef(
  <T extends ElementType = typeof TABLE_FOOT_ELEMENT>(
    {as: Component = TABLE_FOOT_ELEMENT as T, className, children, ...rest}: TableFootProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableFootTheme();
    let props = filterProps({
      ref,
      className: theme(null, className),
      'data-component': 'table-foot',
      ...rest,
    });

    return createElement(Component, props, children);
  },
);

export const tableFootTheme: ComponentTheme<typeof useTableFootTheme> = {
  className: 'font-sans text-sm',
};

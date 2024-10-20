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

export const useTableBodyTheme = createComponentTheme('TableBody');

const TABLE_BODY_ELEMENT = 'tbody';

export type TableBodyProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableBodyTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableBody = forwardRef(
  <T extends ElementType = typeof TABLE_BODY_ELEMENT>(
    {as: Component = TABLE_BODY_ELEMENT as T, className, children, ...rest}: TableBodyProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableBodyTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-body',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableBodyTheme: ComponentTheme<typeof useTableBodyTheme> = {
  className: 'font-sans',
};

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

export const useTableTheme = createComponentTheme('Table');

const TABLE_ELEMENT = 'table';

export type TableProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string | undefined;
    }
>;

export const Table = forwardRef(
  <T extends ElementType = typeof TABLE_ELEMENT>(
    {as: Component = TABLE_ELEMENT as T, className, children, ...rest}: TableProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableTheme: ComponentTheme<typeof useTableTheme> = {
  className: '',
};

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
import {filterProps} from './internals.js';

export const useTableFootTheme = createComponentTheme('TableFoot');

const TABLE_FOOT_ELEMENT = 'tfoot';

export type TableFootProps<T extends ElementType> = ComponentProps<typeof useTableFootTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const TableFoot = <T extends ElementType = typeof TABLE_FOOT_ELEMENT>({
  as: Component = TABLE_FOOT_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableFootProps<T>) => {
  let theme = useTableFootTheme();
  let props = filterProps({
    ref,
    className: theme(null, className),
    'data-component': 'table-foot',
    ...rest,
  });

  return createElement(Component, props, children);
};

export const tableFootTheme: ComponentTheme<typeof useTableFootTheme> = {
  className: 'font-sans text-sm',
};

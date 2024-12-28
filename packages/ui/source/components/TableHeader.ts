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

export const useTableHeaderTheme = createComponentTheme('TableHeader');

const TABLE_HEADER_ELEMENT = 'th';

export type TableHeaderProps<T extends ElementType> = ComponentProps<typeof useTableHeaderTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const TableHeader = <T extends ElementType = typeof TABLE_HEADER_ELEMENT>({
  as: Component = TABLE_HEADER_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableHeaderProps<T>) => {
  let theme = useTableHeaderTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table-header',
    ...rest,
  };

  return createElement(Component, props, children);
};

export const tableHeaderTheme: ComponentTheme<typeof useTableHeaderTheme> = {
  className: 'relative p-1 text-sm font-medium z-20 font-sans tabular-nums whitespace-nowrap',
};

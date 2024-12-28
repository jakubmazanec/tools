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

export const useTableBodyTheme = createComponentTheme('TableBody');

const TABLE_BODY_ELEMENT = 'tbody';

export type TableBodyProps<T extends ElementType> = ComponentProps<typeof useTableBodyTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const TableBody = <T extends ElementType = typeof TABLE_BODY_ELEMENT>({
  as: Component = TABLE_BODY_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableBodyProps<T>) => {
  let theme = useTableBodyTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table-body',
    ...rest,
  };

  return createElement(Component, props, children);
};

export const tableBodyTheme: ComponentTheme<typeof useTableBodyTheme> = {
  className: 'font-sans',
};

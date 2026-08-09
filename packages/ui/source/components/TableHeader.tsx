import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

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

export function TableHeader<T extends ElementType = typeof TABLE_HEADER_ELEMENT>({
  as: Component = TABLE_HEADER_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableHeaderProps<T>) {
  let theme = useTableHeaderTheme();
  let props = {
    className: theme(null, className),
    'data-component': 'table-header',
    ...rest,
  };
  let Tag: ElementType = Component;

  return (
    <Tag {...props} ref={ref}>
      {children}
    </Tag>
  );
}

export const tableHeaderTheme: ComponentTheme<typeof useTableHeaderTheme> = {
  className:
    'relative p-1 text-sm font-medium z-20 font-sans tabular-nums whitespace-nowrap empty:p-0',
};

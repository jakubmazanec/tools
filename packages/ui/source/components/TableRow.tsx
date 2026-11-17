import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';

export const useTableRowTheme = createComponentTheme('TableRow');

const TABLE_ROW_ELEMENT = 'tr';

export type TableRowProps<T extends ElementType> = ComponentProps<typeof useTableRowTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function TableRow<T extends ElementType = typeof TABLE_ROW_ELEMENT>({
  as: Component = TABLE_ROW_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableRowProps<T>) {
  let theme = useTableRowTheme();
  let props = {
    className: theme(null, className),
    'data-component': 'table-row',
    ...rest,
  };
  let Tag: ElementType = Component;

  return (
    <Tag {...props} ref={ref}>
      {children}
    </Tag>
  );
}

export const tableRowTheme: ComponentTheme<typeof useTableRowTheme> = {
  className: 'font-sans odd:bg-white even:bg-neutral-25',
};

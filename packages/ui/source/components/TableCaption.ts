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

export const useTableCaptionTheme = createComponentTheme('TableCaption');

const TABLE_CAPTION_ELEMENT = 'caption';

export type TableCaptionProps<T extends ElementType> = ComponentProps<typeof useTableCaptionTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const TableCaption = <T extends ElementType = typeof TABLE_CAPTION_ELEMENT>({
  as: Component = TABLE_CAPTION_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TableCaptionProps<T>) => {
  let theme = useTableCaptionTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'table-caption',
    ...rest,
  };

  return createElement(Component, props, children);
};

export const tableCaptionTheme: ComponentTheme<typeof useTableCaptionTheme> = {
  className: 'font-sans text-sm font-medium mb-2',
};

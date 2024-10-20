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

export const useTableCaptionTheme = createComponentTheme('TableCaption');

const TABLE_CAPTION_ELEMENT = 'caption';

export type TableCaptionProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTableCaptionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const TableCaption = forwardRef(
  <T extends ElementType = typeof TABLE_CAPTION_ELEMENT>(
    {
      as: Component = TABLE_CAPTION_ELEMENT as T,
      className,
      children,
      ...rest
    }: TableCaptionProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTableCaptionTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'table-caption',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const tableCaptionTheme: ComponentTheme<typeof useTableCaptionTheme> = {
  className: 'font-sans text-sm font-medium mb-2',
};

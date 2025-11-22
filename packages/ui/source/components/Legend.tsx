import {Legend as HeadlessLegend, type LegendProps as HeadlessLegendProps} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useLegendTheme = createComponentTheme('Legend');

const LEGEND_ELEMENT = 'div';

export type LegendProps<T extends ElementType> = ComponentProps<typeof useLegendTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string | undefined;
  };

export function Legend<T extends ElementType = typeof LEGEND_ELEMENT>({
  as = LEGEND_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: LegendProps<T>) {
  let theme = useLegendTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessLegendProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'legend',
    ...rest,
  });

  return <HeadlessLegend {...props}>{children}</HeadlessLegend>;
}

export const legendTheme: ComponentTheme<typeof useLegendTheme> = {
  className: 'font-sans font-medium text-sm',
};

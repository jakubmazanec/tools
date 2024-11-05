import {Legend as HeadlessLegend, type LegendProps as HeadlessLegendProps} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {filterProps, forwardRef} from './internals.js';

export const useLegendTheme = createComponentTheme('Legend');

const LEGEND_ELEMENT = 'div';

export type LegendProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useLegendTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string | undefined;
    }
>;

export const Legend = forwardRef(
  <T extends ElementType = typeof LEGEND_ELEMENT>(
    {as = LEGEND_ELEMENT as T, className, children, ...rest}: LegendProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
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
  },
);

export const legendTheme: ComponentTheme<typeof useLegendTheme> = {
  className: 'font-sans font-semibold text-sm',
};

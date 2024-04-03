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

export const useContainerTheme = createComponentTheme('Container', {
  variants: {
    spacing: ['extra-small', 'small', 'medium', 'large'],
    direction: ['row', 'column'],
    justify: ['normal', 'center', 'spaced'],
    align: ['normal', 'center'],
  },
});

const TEXT_ELEMENT = 'div';

export type ContainerProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useContainerTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Container = forwardRef(
  <T extends ElementType = typeof TEXT_ELEMENT>(
    {
      spacing = 'medium',
      direction = 'row',
      justify = 'normal',
      align = 'normal',
      as: Component = TEXT_ELEMENT as T,
      className,
      children,
      ...rest
    }: ContainerProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useContainerTheme({spacing, direction, justify, align});
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'container',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const containerTheme: ComponentTheme<typeof useContainerTheme> = {
  className: 'flex',
  variants: {
    spacing: {
      'extra-small': 'gap-1',
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
    },
    direction: {
      row: '',
      column: 'flex-col',
    },
    justify: {
      normal: '',
      center: 'justify-center',
      spaced: 'justify-between',
    },
    align: {
      normal: '',
      center: 'items-center',
    },
  },
};

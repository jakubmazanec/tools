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

export const useContainerTheme = createComponentTheme('Container', {
  variants: {
    spacing: ['extra-small', 'small', 'medium', 'large'],
    direction: ['row', 'column'],
    justify: ['normal', 'center', 'spaced', 'start', 'end'],
    align: ['normal', 'center'],
  },
});

const TEXT_ELEMENT = 'div';

export type ContainerProps<T extends ElementType> = ComponentProps<typeof useContainerTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function Container<T extends ElementType = typeof TEXT_ELEMENT>({
  spacing = 'medium',
  direction = 'row',
  justify = 'normal',
  align = 'normal',
  as: Component = TEXT_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: ContainerProps<T>) {
  let theme = useContainerTheme({spacing, direction, justify, align});
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'container',
    ...rest,
  };

  return createElement(Component, props, children);
}

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
      start: 'justify-start',
      end: 'justify-end',
    },
    align: {
      normal: '',
      center: 'items-center',
    },
  },
};

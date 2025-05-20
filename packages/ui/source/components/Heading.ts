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

export const useHeadingTheme = createComponentTheme('Heading', {
  variants: {
    size: ['small', 'medium', 'large'],
  },
});

const HEADING_ELEMENT = 'h1';

export type HeadingProps<T extends ElementType> = ComponentProps<typeof useHeadingTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function Heading<T extends ElementType = typeof HEADING_ELEMENT>({
  size = 'medium',
  as: Component,
  className,
  ref,
  children,
  ...rest
}: HeadingProps<T>) {
  let theme = useHeadingTheme({size});
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'heading',
    ...rest,
  };
  // TODO: is this ok typings-wise? Are types for <h1> and <h2> different?
  let DefaultComponent = HEADING_ELEMENT;

  if (size === 'small') {
    DefaultComponent = 'h3';
  }

  if (size === 'medium') {
    DefaultComponent = 'h2';
  }

  return createElement(Component ?? DefaultComponent, props, children);
}

export const headingTheme: ComponentTheme<typeof useHeadingTheme> = {
  className: 'm-0',
  variants: {
    size: {
      small: 'text-lg font-medium',
      medium: 'text-xl font-medium',
      large: 'text-2xl font-medium',
    },
  },
};

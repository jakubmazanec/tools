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

export const useTextTheme = createComponentTheme('Text', {
  variants: {
    size: ['small', 'medium', 'large'],
  },
});

const TEXT_ELEMENT = 'p';

export type TextProps<T extends ElementType> = ComponentProps<typeof useTextTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const Text = <T extends ElementType = typeof TEXT_ELEMENT>({
  size = 'medium',
  as: Component = TEXT_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: TextProps<T>) => {
  let theme = useTextTheme({size});
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'text',
    ...rest,
  };

  return createElement(Component, props, children);
};

export const textTheme: ComponentTheme<typeof useTextTheme> = {
  className: 'm-0',
  variants: {
    size: {
      small: 'text-xs',
      medium: 'text-sm',
      large: '',
    },
  },
};

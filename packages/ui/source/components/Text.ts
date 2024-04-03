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

export const useTextTheme = createComponentTheme('Text', {
  variants: {
    size: ['small', 'medium', 'large'],
  },
});

const TEXT_ELEMENT = 'p';

export type TextProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useTextTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Text = forwardRef(
  <T extends ElementType = typeof TEXT_ELEMENT>(
    {
      size = 'medium',
      as: Component = TEXT_ELEMENT as T,
      className,
      children,
      ...rest
    }: TextProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTextTheme({size});
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'text',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

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

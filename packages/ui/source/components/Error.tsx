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
import {Text} from './Text.js';
import {useField} from './useField.js';

export const useErrorTheme = createComponentTheme('Error');

const ERROR_ELEMENT = 'p';

export type ErrorProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useErrorTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Error = forwardRef(
  <T extends ElementType = typeof ERROR_ELEMENT>(
    {as: Component = ERROR_ELEMENT as T, className, children, ...rest}: ErrorProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useErrorTheme();
    let field = useField();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'error',
      ...rest,
    };

    if (field) {
      return createElement(
        Component,
        props,
        field.errors ? field.errors.map((error) => <Text key={error}>{error}</Text>) : null,
      );
    }

    return createElement(Component, props, children);
  },
);

export const errorTheme: ComponentTheme<typeof useErrorTheme> = {
  className: 'flex text-danger-500 empty:hidden',
};

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
import {Text} from './Text.js';
import {useField} from './useField.js';

export const useErrorTheme = createComponentTheme('Error');

const ERROR_ELEMENT = 'div';

export type ErrorProps<T extends ElementType> = ComponentProps<typeof useErrorTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export const Error = <T extends ElementType = typeof ERROR_ELEMENT>({
  as: Component = ERROR_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: ErrorProps<T>) => {
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
};

export const errorTheme: ComponentTheme<typeof useErrorTheme> = {
  className: 'flex text-danger-500 empty:hidden',
};

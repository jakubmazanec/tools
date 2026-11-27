import {
  Description as HeadlessDescription,
  type DescriptionProps as HeadlessDescriptionProps,
} from '@headlessui/react';
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
import {filterProps} from './internals.js';
import {Text} from './Text.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useErrorTheme = createComponentTheme('Error');

const ERROR_ELEMENT = 'div';

export type ErrorProps<T extends ElementType> = ComponentProps<typeof useErrorTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
  };

export function Error<T extends ElementType = typeof ERROR_ELEMENT>({
  as: Component = ERROR_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: ErrorProps<T>) {
  let theme = useErrorTheme();
  let field = useField();
  let fieldName = useFieldName();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'error',
    ...rest,
  };

  if (field || fieldName) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let headlessProps: HeadlessDescriptionProps<any> = filterProps({as: Component, ...props});

    return (
      <HeadlessDescription {...headlessProps}>
        {field ? field.errors?.map((error) => <Text key={error}>{error}</Text>) : children}
      </HeadlessDescription>
    );
  }

  // A Headless UI Description throws without a Headless UI parent
  return createElement(Component, props, children);
}

export const errorTheme: ComponentTheme<typeof useErrorTheme> = {
  className: 'flex text-danger-500 empty:hidden',
};

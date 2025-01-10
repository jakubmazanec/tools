import {type FieldMetadata, type FieldName} from '@conform-to/react';
import {Field as HeadlessField, type FieldProps as HeadlessFieldProps} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {FieldContext, FieldNameContext, filterProps} from './internals.js';

export const useFieldTheme = createComponentTheme('Field');

const FIELD_ELEMENT = 'div';

export type FieldProps<T extends ElementType> = ComponentProps<typeof useFieldTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren &
  (
    | {
        as?: T | undefined;
        className?: string | undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        name?: FieldName<any, any> | string | undefined;
        field?: undefined;
      }
    | {
        as?: T | undefined;
        className?: string | undefined;
        name?: undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        field?: FieldMetadata<any, any> | undefined;
      }
  );

export function Field<T extends ElementType = typeof FIELD_ELEMENT>({
  as = FIELD_ELEMENT as T,
  name,
  field,
  className,
  ref,
  children,
  ...rest
}: FieldProps<T>) {
  let theme = useFieldTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessFieldProps<any> = filterProps({
    as,
    ref,
    className: theme(null, className),
    'data-component': 'field',
    ...rest,
  });

  if (field) {
    return (
      <FieldContext value={field}>
        <HeadlessField {...props}>{children}</HeadlessField>
      </FieldContext>
    );
  }

  if (name) {
    return (
      <FieldNameContext value={name}>
        <HeadlessField {...props}>{children}</HeadlessField>
      </FieldNameContext>
    );
  }

  return <HeadlessField {...props}>{children}</HeadlessField>;
}

export const fieldTheme: ComponentTheme<typeof useFieldTheme> = {
  className: 'flex flex-col gap-y-2 font-sans',
};

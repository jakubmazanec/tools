import {type FieldMetadata, type FieldName} from '@conform-to/react';
import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {FieldContext, FieldNameContext} from './internals.js';

export const useCheckboxFieldTheme = createComponentTheme('CheckboxField');

export type CheckboxFieldProps = PropsWithChildren<
  ComponentProps<typeof useCheckboxFieldTheme> &
    (
      | {
          className?: string | undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
          field?: FieldMetadata<any, any> | undefined;
          name?: undefined;
        }
      | {
          className?: string | undefined;
          field?: undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
          name?: FieldName<any, any> | string | undefined;
        }
    )
>;

export function CheckboxField({field, name, className, children}: CheckboxFieldProps) {
  let theme = useCheckboxFieldTheme();

  if (field) {
    return (
      <FieldContext value={field}>
        <HeadlessField className={theme(null, className)} data-component="checkbox-field">
          {children}
        </HeadlessField>
      </FieldContext>
    );
  }

  if (name) {
    return (
      <FieldNameContext value={name}>
        <HeadlessField className={theme(null, className)} data-component="checkbox-field">
          {children}
        </HeadlessField>
      </FieldNameContext>
    );
  }

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}

export const checkboxFieldTheme: ComponentTheme<typeof useCheckboxFieldTheme> = {
  className:
    'grid grid-cols-[theme(spacing.5)_1fr] gap-x-2 gap-y-1 [&>[data-component=description]]:col-start-2',
};

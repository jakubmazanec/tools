import {type FieldMetadata, type FieldName} from '@conform-to/react';
import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  useCallback,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {FieldContext, FieldNameContext, useFormId} from './internals.js';

export const useRadioGroupTheme = createComponentTheme('RadioGroup', {
  variants: {
    disabled: [true, false],
  },
});

const RADIO_GROUP_ELEMENT = 'div';

export type RadioGroupProps<
  T extends ElementType,
  V extends boolean | number | string,
> = ComponentProps<typeof useRadioGroupTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren &
  (
    | {
        as?: T | undefined;
        value?: V | undefined;
        defaultValue?: V | undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        field?: FieldMetadata<any, any> | undefined;
        name?: undefined;
        className?: string | undefined;
        onChange?: ((value: V) => void) | undefined;
      }
    | {
        as?: T | undefined;
        value?: V | undefined;
        defaultValue?: V | undefined;
        field?: undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        name?: FieldName<any, any> | string | undefined;
        className?: string;
        onChange?: ((value: V) => void) | undefined;
      }
  );

export const RadioGroup = <
  T extends ElementType = typeof RADIO_GROUP_ELEMENT,
  V extends boolean | number | string = string,
>({
  disabled = false,
  as = RADIO_GROUP_ELEMENT as T,
  value,
  defaultValue,
  field,
  name,
  className,
  onChange,
  ref,
  children,
  ...rest
}: RadioGroupProps<T, V>) => {
  let theme = useRadioGroupTheme({disabled});
  let formId = useFormId();

  let handleChange = useCallback(
    (newValue: V) => {
      onChange?.(newValue);
    },
    [onChange],
  );

  if (field) {
    let props = {
      ref,
      disabled,
      defaultValue,
      name: field.name,
      form: formId,
      className: theme(null, className),
      onChange: handleChange,
      ...rest,
    };

    return (
      <FieldContext value={field}>
        <HeadlessRadioGroup {...props}>{children}</HeadlessRadioGroup>
      </FieldContext>
    );
  }

  if (name) {
    let props = {
      ref,
      disabled,
      defaultValue,
      name,
      form: formId,
      className: theme(null, className),
      onChange: handleChange,
      'data-component': 'radio-group',
      ...rest,
    };

    return (
      <FieldNameContext value={name}>
        <HeadlessRadioGroup {...props}>{children}</HeadlessRadioGroup>
      </FieldNameContext>
    );
  }

  let props = {
    ref,
    disabled,
    value,
    defaultValue,
    className: theme(null, className),
    onChange: handleChange,
    'data-component': 'radio-group',
    ...rest,
  };

  return <HeadlessRadioGroup {...props}>{children}</HeadlessRadioGroup>;
};

export const radioGroupTheme: ComponentTheme<typeof useRadioGroupTheme> = {
  className: 'flex flex-col gap-y-2',
  variants: {
    disabled: {
      true: '',
      false: '',
    },
  },
};

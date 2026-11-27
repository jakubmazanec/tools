import {
  Checkbox as HeadlessCheckbox,
  type CheckboxProps as HeadlessCheckboxProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, useCallback} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {Icon} from './Icon.js';
import {useFormId} from './internals.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useCheckboxTheme = createComponentTheme('Checkbox', {elements: ['root', 'icon']});

const CHECKBOX_ELEMENT = 'span';

export type CheckboxProps<T extends ElementType> = ComponentProps<typeof useCheckboxTheme> &
  ComponentRef<T> &
  Omit<ComponentPropsWithoutRef<T>, 'onChange'> & {
    as?: T | undefined;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    indeterminate?: boolean | undefined;
    autoFocus?: boolean | undefined;
    name?: string;
    className?: string;
    onChange?: ((checked: boolean) => void) | undefined;
  };

export function Checkbox<T extends ElementType = typeof CHECKBOX_ELEMENT>({
  disabled,
  invalid,
  as = CHECKBOX_ELEMENT as T,
  checked,
  indeterminate,
  autoFocus,
  name,
  className,
  onChange,
  ref,
  ...rest
}: CheckboxProps<T>) {
  let theme = useCheckboxTheme();
  let fieldName = useFieldName();
  let field = useField();
  let formId = useFormId();
  let handleChange = useCallback(() => {
    onChange?.(!checked);
  }, [checked, onChange]);
  // Field errors also make it invalid, so `invalid={false}` works like leaving the prop out
  let isInvalid = invalid === true || field?.errors !== undefined;

  if (field || fieldName) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessCheckboxProps<any> = {
      as,
      ref,
      form: formId,
      name: field?.name ?? fieldName,
      indeterminate,
      // Headless UI ignores a parent's disabled state when given `false`, so pass `undefined`
      disabled: disabled ? true : undefined,
      // Headless UI has no `invalid` here, so set the attributes ourselves
      'aria-invalid': isInvalid ? true : undefined,
      'data-invalid': isInvalid ? '' : undefined,
      autoFocus,
      className: theme.root('relative', className),
      'data-component': 'checkbox',
      ...rest,
    };

    return (
      <HeadlessCheckbox {...props}>
        <span className={theme.icon()}>
          <Icon name="Check" />
        </span>
      </HeadlessCheckbox>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessCheckboxProps<any> = {
    as,
    ref,
    checked: Boolean(checked),
    name,
    indeterminate,
    // Headless UI ignores a parent's disabled state when given `false`, so pass `undefined`
    disabled: disabled ? true : undefined,
    // Headless UI has no `invalid` here, so set the attributes ourselves
    'aria-invalid': isInvalid ? true : undefined,
    'data-invalid': isInvalid ? '' : undefined,
    autoFocus,
    className: theme.root('relative', className),
    'data-component': 'checkbox',
    onChange: handleChange,
    ...rest,
  };

  return (
    <HeadlessCheckbox {...props}>
      <span className={theme.icon()}>
        <Icon name="Check" />
      </span>
    </HeadlessCheckbox>
  );
}

export const checkboxTheme: ComponentTheme<typeof useCheckboxTheme> = {
  classNames: {
    root: 'group/checkbox inline-block size-5 cursor-pointer data-disabled:cursor-not-allowed',
    icon: 'flex justify-content justify-item size-5 *:rounded-2 *:bg-white *:border-2 *:border-neutral-100 *:hover:border-neutral-200 *:shadow-inner *:transition-colors *:text-transparent *:hover:text-neutral-100 group-data-[checked]/checkbox:*:bg-neutral-950 group-data-[checked]/checkbox:*:border-neutral-950 group-data-[checked]/checkbox:*:text-white hover:group-data-[checked]/checkbox:*:border-neutral-950 hover:group-data-[checked]/checkbox:*:text-white group-data-disabled/checkbox:*:hover:text-transparent group-data-disabled/checkbox:*:border-neutral-50 group-data-disabled/checkbox:*:hover:border-neutral-50 group-data-disabled/checkbox:group-data-[checked]/checkbox:*:bg-neutral-100 group-data-disabled/checkbox:group-data-[checked]/checkbox:*:border-neutral-100 group-data-disabled/checkbox:group-data-[checked]/checkbox:*:text-white group-data-disabled/checkbox:hover:group-data-[checked]/checkbox:*:border-neutral-100 group-data-disabled/checkbox:hover:group-data-[checked]/checkbox:*:text-white group-data-invalid/checkbox:*:border-danger-500 group-data-invalid/checkbox:*:hover:border-danger-500 group-data-invalid/checkbox:group-data-[checked]/checkbox:*:border-danger-500 group-data-invalid/checkbox:hover:group-data-[checked]/checkbox:*:border-danger-500',
  },
};

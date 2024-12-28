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

export const useCheckboxTheme = createComponentTheme('Checkbox', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'icon'],
});

const CHECKBOX_ELEMENT = 'span';

export type CheckboxProps<T extends ElementType> = ComponentProps<typeof useCheckboxTheme> &
  ComponentRef<T> &
  Omit<ComponentPropsWithoutRef<T>, 'onChange'> & {
    as?: T | undefined;
    checked?: boolean | undefined;
    indeterminate?: boolean | undefined;
    autoFocus?: boolean | undefined;
    name?: string;
    className?: string;
    onChange?: ((checked: boolean) => void) | undefined;
  };

export const Checkbox = <T extends ElementType = typeof CHECKBOX_ELEMENT>({
  disabled = false,
  as = CHECKBOX_ELEMENT as T,
  checked,
  indeterminate,
  autoFocus,
  name,
  className,
  onChange,
  ref,
  ...rest
}: CheckboxProps<T>) => {
  let theme = useCheckboxTheme({disabled});
  let fieldName = useFieldName();
  let field = useField();
  let formId = useFormId();

  let handleChange = useCallback(() => {
    onChange?.(!checked);
  }, [checked, onChange]);

  if (field || fieldName) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessCheckboxProps<any> = {
      as,
      ref,
      form: formId,
      name: field?.name ?? fieldName,
      indeterminate,
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
};

export const checkboxTheme: ComponentTheme<typeof useCheckboxTheme> = {
  classNames: {
    root: 'group/checkbox inline-block size-5 cursor-pointer',
    icon: 'flex justify-content justify-item size-5 *:rounded-2 *:bg-white *:border-2 *:border-neutral-100 *:hover:border-neutral-200 *:shadow-inner *:transition-colors *:text-transparent *:hover:text-neutral-100 group-data-[checked]/checkbox:*:bg-neutral-950 group-data-[checked]/checkbox:*:border-neutral-950 group-data-[checked]/checkbox:*:text-white',
  },
  variants: {
    disabled: {
      true: {
        root: 'cursor-not-allowed',
        icon: '*:hover:text-transparent *:border-neutral-50 *:hover:border-neutral-50 group-data-[checked]/checkbox:*:bg-neutral-100 group-data-[checked]/checkbox:*:border-neutral-100 group-data-[checked]/checkbox:*:text-white',
      },
      false: {
        root: '',
        icon: '',
      },
    },
  },
};

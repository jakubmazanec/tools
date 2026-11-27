import {getTextareaProps} from '@conform-to/react';
import {Textarea as HeadlessTextarea} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ComponentType, type ElementType} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useTextareaTheme = createComponentTheme('Textarea', {
  elements: ['root', 'textarea', 'icon'],
});

const TEXTAREA_ELEMENT = 'textarea';

export type TextareaProps<T extends ElementType> = ComponentProps<typeof useTextareaTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> & {
    as?: T | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    name?: string | undefined;
    className?: string | undefined;
    icon?: ComponentType<object> | undefined;
  };

export function Textarea<T extends ElementType = typeof TEXTAREA_ELEMENT>({
  disabled,
  invalid,
  as = TEXTAREA_ELEMENT as T,
  name,
  className,
  icon: Icon,
  ref,
  ...rest
}: TextareaProps<T>) {
  let theme = useTextareaTheme();
  let fieldName = useFieldName();
  let field = useField();
  let rootProps: Record<string, unknown> = {
    className: theme.root('relative', className),
    'data-component': 'textarea',
  };
  let textareaProps: Record<string, unknown> = {
    ref,
    // Headless UI ignores a parent's disabled state when given `false`, so pass `undefined`
    disabled: disabled ? true : undefined,
    // Field errors also make it invalid, so `invalid={false}` works like leaving the prop out
    invalid: invalid === true || field?.errors !== undefined,
    name: field?.name ?? fieldName ?? name,
    className: theme.textarea(null, className),
    ...rest,
  };
  let iconProps: Record<string, unknown> = {
    className: theme.icon('absolute'),
  };

  if (Icon) {
    rootProps['data-icon'] = '';
  }

  if (field) {
    let {key, ...restProps} = getTextareaProps(field);

    textareaProps = {...restProps, ...textareaProps};
  }

  return (
    <span {...rootProps}>
      <HeadlessTextarea {...textareaProps} />
      {Icon ?
        <Icon {...iconProps} />
      : null}
    </span>
  );
}

export const textareaTheme: ComponentTheme<typeof useTextareaTheme> = {
  classNames: {
    root: 'group flex w-full items-center rounded border-2 border-neutral-100 hover:border-neutral-200 py-2 px-2.5 min-h-19 bg-white shadow-inner transition-colors focus-within:outline-solid focus-within:outline-2 focus-within:outline-blue-400/50 focus-within:outline-offset-[calc(var(--spacing)*0.5)] has-data-disabled:text-neutral-200 has-data-disabled:cursor-not-allowed has-data-disabled:hover:border-neutral-100 has-data-invalid:border-danger-500 has-data-disabled:has-data-invalid:hover:border-danger-500',
    textarea:
      'min-h-15 p-0 focus:outline-none w-full group-data-[icon]:pl-6 bg-transparent font-sans text-sm',
    icon: 'size-6 left-[0.3125rem] top-[0.3125rem] text-neutral-300',
  },
};

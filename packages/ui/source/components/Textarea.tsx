import {getTextareaProps} from '@conform-to/react';
import {Textarea as HeadlessTextarea} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ComponentType, type ElementType, type Ref} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {forwardRef} from './internals.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useTextareaTheme = createComponentTheme('Textarea', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'textarea', 'icon'],
});

const TEXTAREA_ELEMENT = 'textarea';

export type TextareaProps<T extends ElementType> = ComponentProps<typeof useTextareaTheme> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    name?: string | undefined;
    className?: string | undefined;
    icon?: ComponentType<object> | undefined;
  };

export const Textarea = forwardRef(
  <T extends ElementType = typeof TEXTAREA_ELEMENT>(
    {
      disabled = false,
      as = TEXTAREA_ELEMENT as T,
      name,
      className,
      icon: Icon,
      ...rest
    }: TextareaProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useTextareaTheme({disabled});
    let fieldName = useFieldName();
    let field = useField();

    let rootProps: Record<string, unknown> = {
      className: theme.root('relative', className),
      'data-component': 'textarea',
    };
    let textareaProps: Record<string, unknown> = {
      ref,
      disabled,
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
  },
);

export const textareaTheme: ComponentTheme<typeof useTextareaTheme> = {
  classNames: {
    root: 'group flex w-full items-center rounded border-2 border-neutral-100 hover:border-neutral-200 py-2 px-2.5 min-h-19 bg-white shadow-inner transition-colors',
    textarea:
      'min-h-15 p-0 focus-visible:outline-none w-full group-data-[icon]:pl-6 bg-transparent font-sans text-sm',
    icon: 'size-6 left-[0.3125rem] top-[0.3125rem] text-neutral-300',
  },
  variants: {
    disabled: {
      true: {
        root: 'border-neutral-100 text-neutral-200 cursor-not-allowed',
        textarea: '',
        icon: '',
      },
      false: {
        root: '',
        textarea: '',
        icon: '',
      },
    },
  },
};

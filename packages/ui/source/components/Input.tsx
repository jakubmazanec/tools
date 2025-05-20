import {getInputProps} from '@conform-to/react';
import {Input as HeadlessInput} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ElementType,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {Icon} from './Icon.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useInputTheme = createComponentTheme('Input', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'input', 'icon', 'clearButton'],
});

const INPUT_ELEMENT = 'input';

export type InputProps<T extends ElementType> = ComponentProps<typeof useInputTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> & {
    as?: T | undefined;
    name?: string | undefined;
    className?: string | undefined;
    icon?: ComponentType<object> | string | undefined;
    showClearButton?: boolean | undefined;
  };

export function Input<T extends ElementType = typeof INPUT_ELEMENT>({
  disabled = false,
  as = INPUT_ELEMENT as T,
  name,
  className,
  icon: IconComponent,
  showClearButton = false,
  ref,
  ...rest
}: InputProps<T>) {
  let theme = useInputTheme({disabled});
  let fieldName = useFieldName();
  let field = useField();
  let inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    if (inputRef.current) {
      return inputRef.current;
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- false positive
    return {} as HTMLElement;
  });

  let handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.dispatchEvent(new Event('input', {bubbles: true}));
    }
  }, []);

  let rootProps: Record<string, unknown> = {
    className: theme.root('relative', className),
    'data-component': 'input',
  };
  let inputProps: Record<string, unknown> = {
    as,
    ref: inputRef,
    disabled,
    name: field?.name ?? fieldName ?? name,
    className: theme.input(),
    size: 1, // so the input default width without styling is small
    ...rest,
  };
  let iconProps: Record<string, unknown> = {
    className: theme.icon('absolute'),
  };
  let clearButtonProps: Record<string, unknown> = {
    className: theme.clearButton('absolute'),
  };

  if (IconComponent) {
    rootProps['data-icon'] = '';
  }

  if (showClearButton) {
    rootProps['data-clear-button'] = '';
  }

  if (field) {
    let {key, ...restProps} = getInputProps(field, {type: 'text'});

    inputProps = {...restProps, ...inputProps};
  }

  return (
    <span {...rootProps}>
      <HeadlessInput {...inputProps} />
      {IconComponent ?
        <span {...iconProps}>
          {typeof IconComponent === 'string' ?
            <Icon name={IconComponent} />
          : <Icon size="large">
              <IconComponent />
            </Icon>
          }
        </span>
      : null}
      {showClearButton ?
        <button type="button" {...clearButtonProps} onClick={handleClear}>
          <Icon name="XMark" />
        </button>
      : null}
    </span>
  );
}

export const inputTheme: ComponentTheme<typeof useInputTheme> = {
  classNames: {
    root: 'group flex w-full items-center rounded-2 border-2 border-neutral-100 hover:border-neutral-200 px-2.5 h-9 bg-white shadow-inner transition-colors focus-within:outline-solid focus-within:outline-2 focus-within:outline-blue-400/50 focus-within:outline-offset-[calc(var(--spacing)*0.5)]',
    input:
      'p-0 focus:outline-none w-full group-data-[icon]:pl-6 group-data-[clear-button]:pr-4 bg-transparent font-sans text-sm',
    icon: 'size-6 left-[0.3125rem] top-[0.3125rem] text-neutral-300',
    clearButton: 'rounded-1 text-neutral-500 size-5 right-2 cursor-pointer',
  },
  variants: {
    disabled: {
      true: {
        root: 'border-neutral-100 text-neutral-200 cursor-not-allowed',
        input: '',
        icon: '',
        clearButton: '',
      },
      false: {
        root: '',
        input: '',
        icon: '',
        clearButton: '',
      },
    },
  },
};

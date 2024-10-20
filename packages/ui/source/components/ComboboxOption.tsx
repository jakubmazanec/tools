import {
  ComboboxOption as HeadlessComboboxOption,
  type ComboboxOptionProps as HeadlessComboboxOptionProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {Icon} from './Icon.js';
import {forwardRef} from './internals.js';

export const useComboboxOptionTheme = createComponentTheme('ComboboxOption', {
  variants: {disabled: [true, false]},
  elements: ['root', 'icon'],
});

const LISTBOX_OPTION_ELEMENT = 'div';

export type ComboboxOptionProps<
  T extends ElementType,
  V extends boolean | number | string,
> = PropsWithChildren<
  ComponentProps<typeof useComboboxOptionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      value: V;
      className?: string;
    }
>;

export const ComboboxOption = forwardRef(
  <
    T extends ElementType = typeof LISTBOX_OPTION_ELEMENT,
    V extends boolean | number | string = string,
  >(
    {
      disabled = false,
      as = LISTBOX_OPTION_ELEMENT as T,
      value,
      className,
      children,
      ...rest
    }: ComboboxOptionProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useComboboxOptionTheme({disabled});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessComboboxOptionProps<any, any> = {
      as,
      ref,
      value,
      disabled,
      className: theme.root('cursor-pointer', className),
      'data-component': 'combobox-option',
      ...rest,
    };

    return (
      <HeadlessComboboxOption {...props}>
        <span className={theme.icon('absolute')}>
          <Icon name="Check" />
        </span>
        {children}
      </HeadlessComboboxOption>
    );
  },
);

export const comboboxOptionTheme: ComponentTheme<typeof useComboboxOptionTheme> = {
  classNames: {
    root: 'relative group/option p-1 pr-6 rounded-1 hover:bg-neutral-50 data-[active]:bg-neutral-50 text-sm transition-colors',
    icon: 'hidden group-data-[selected]/option:block right-1 top-1 text-neutral-500',
  },
  variants: {
    disabled: {
      true: {
        root: 'text-neutral-200 cursor-not-allowed',
        icon: 'text-neutral-200',
      },
      false: {
        root: '',
        icon: '',
      },
    },
  },
};

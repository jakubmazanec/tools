import {
  ListboxOption as HeadlessListboxOption,
  type ListboxOptionProps as HeadlessListboxOptionProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {Icon} from './Icon.js';

export const useListboxOptionTheme = createComponentTheme('ListboxOption', {
  variants: {disabled: [true, false]},
  elements: ['root', 'icon'],
});

const LISTBOX_OPTION_ELEMENT = 'div';

export type ListboxOptionProps<
  T extends ElementType,
  V extends boolean | number | string,
> = ComponentProps<typeof useListboxOptionTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    value: V;
    className?: string;
  };

export function ListboxOption<
  T extends ElementType = typeof LISTBOX_OPTION_ELEMENT,
  V extends boolean | number | string = string,
>({
  disabled = false,
  as = LISTBOX_OPTION_ELEMENT as T,
  value,
  className,
  ref,
  children,
  ...rest
}: ListboxOptionProps<T, V>) {
  let theme = useListboxOptionTheme({disabled});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessListboxOptionProps<any, any> = {
    as,
    ref,
    value,
    disabled,
    className: theme.root('cursor-pointer', className),
    'data-component': 'listbox-option',
    ...rest,
  };

  return (
    <HeadlessListboxOption {...props}>
      <span className={theme.icon('absolute')}>
        <Icon name="Check" />
      </span>
      {children}
    </HeadlessListboxOption>
  );
}

export const listboxOptionTheme: ComponentTheme<typeof useListboxOptionTheme> = {
  classNames: {
    root: 'group/option p-1 pr-6 rounded-1 hover:bg-neutral-50 data-[active]:bg-neutral-50 text-sm transition-colors relative',
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

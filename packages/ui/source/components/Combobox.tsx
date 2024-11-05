// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {
  Combobox as HeadlessCombobox,
  ComboboxButton as HeadlessComboboxButton,
  ComboboxInput as HeadlessComboboxInput,
  ComboboxOptions as HeadlessComboboxOptions,
  type ComboboxProps as HeadlessComboboxProps,
} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {
  type ChangeEvent,
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  Fragment,
  type PropsWithChildren,
  type Ref,
  useCallback,
  useState,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {ComboboxOption} from './ComboboxOption.js';
import {Icon} from './Icon.js';
import {forwardRef, useFormId} from './internals.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useComboboxTheme = createComponentTheme('Combobox', {
  variants: {disabled: [true, false], invalid: [true, false]},
  elements: ['root', 'input', 'icon', 'options'],
});

const COMBOBOX_ELEMENT = Fragment;

export type ComboboxItem<V> = {
  value: V;
  label: string;
};

export type ComboboxProps<
  T extends ElementType,
  V extends boolean | number | string,
> = PropsWithChildren<
  ComponentProps<typeof useComboboxTheme> &
    ComponentPropsWithoutRef<T> &
    (
      | {
          as?: T | undefined;
          value?: V | undefined;
          defaultValue?: V | undefined;
          multiple?: false | undefined;
          items?: Array<ComboboxItem<V>> | undefined;
          placeholder?: string;
          immediate?: boolean | undefined;
          virtual?: boolean | undefined;
          customValue?: boolean | undefined;
          name?: string | undefined;
          className?: string;
          onChange?: (selectedValue: V | undefined) => void;
        }
      | {
          as?: T | undefined;
          value?: V[] | undefined;
          defaultValue?: V[] | undefined;
          multiple: true;
          items?: Array<ComboboxItem<V>> | undefined;
          placeholder?: string;
          immediate?: boolean | undefined;
          virtual?: boolean | undefined;
          customValue?: boolean | undefined;
          name?: string | undefined;
          className?: string;
          onChange?: (selectedValue: V[] | undefined) => void;
        }
    )
>;

export const Combobox = forwardRef(
  <T extends ElementType = typeof COMBOBOX_ELEMENT, V extends boolean | number | string = string>(
    {
      disabled = false,
      invalid = false,
      as = COMBOBOX_ELEMENT as unknown as T,
      value,
      defaultValue,
      multiple,
      items,
      placeholder,
      immediate = true,
      virtual = false,
      customValue = false,
      name,
      className,
      onChange,
      children,
      ...rest
    }: ComboboxProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useComboboxTheme({disabled, invalid});
    let formId = useFormId();
    let field = useField();
    let fieldName = useFieldName();
    let [query, setQuery] = useState('');

    let handleChange = useCallback(
      (selectedValue: V | null) => {
        if (selectedValue) {
          onChange?.(selectedValue as V & V[]);
        }

        if (selectedValue === null) {
          onChange?.(undefined);
        }
      },
      [onChange],
    );

    let displayValue = useCallback(
      (option: string) => {
        if (items) {
          let selectedItem = items.find((item) => item.value === option);

          if (selectedItem) {
            return selectedItem.label;
          }
        }

        return option;
      },
      [items],
    );

    let handleQueryChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, []);

    if (virtual && !items) {
      throw new Error('Combobox requires `items` prop in virtual scrolling mode!');
    }

    if (virtual && customValue) {
      throw new Error("Combobox doesn't support `customValue` prop in virtual scrolling mode!");
    }

    if (items && children) {
      throw new Error('Combobox accepts only either `items` prop, or children!');
    }

    let filteredItems =
      query ?
        items?.filter((item) =>
          `${item.label as number | string}`
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )
      : items;
    let filteredChildren =
      query ?
        Children.toArray(children).filter((child) => {
          if (
            typeof child === 'object' &&
            'props' in child &&
            typeof child.props === 'object' &&
            typeof (child.props as {children?: unknown[] | string}).children === 'string' &&
            (child.props as {children: string}).children
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          ) {
            return true;
          }

          return false;
        })
      : children;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessComboboxProps<any, any, any> = {
      as,
      ref,
      name: field?.name ?? fieldName ?? name,
      value: value ?? null,
      defaultValue,
      multiple,
      disabled,
      immediate,
      form: formId,
      onChange: handleChange,
      ...rest,
    };

    if (virtual) {
      props.virtual = {
        options: filteredItems?.map((item) => item.value) ?? [],
      };
    }

    return (
      <HeadlessCombobox {...props}>
        <div className={theme.root('relative', className)} data-component="combobox">
          <HeadlessComboboxInput
            className={theme.input(null, className)}
            size={1} // so the input default width without styling is small
            displayValue={displayValue}
            onChange={handleQueryChange}
          />
          <HeadlessComboboxButton className={theme.icon('absolute')}>
            <Icon>
              <ChevronDownIcon />
            </Icon>
          </HeadlessComboboxButton>
        </div>

        {virtual && filteredItems ?
          <HeadlessComboboxOptions className={theme.options()} anchor="bottom start">
            {({option}: {option: V}) => (
              <ComboboxOption value={option}>
                {items?.find((item) => item.value === option)?.label}
              </ComboboxOption>
            )}
          </HeadlessComboboxOptions>
        : null}

        {!virtual && filteredItems ?
          <HeadlessComboboxOptions className={theme.options()} anchor="bottom start">
            {customValue && query.length ?
              <ComboboxOption key={query} value={query}>
                {query}
              </ComboboxOption>
            : null}
            {filteredItems.map((item) => (
              <ComboboxOption key={String(item.value)} value={item.value}>
                {item.label}
              </ComboboxOption>
            ))}
          </HeadlessComboboxOptions>
        : null}

        {!filteredItems && Array.isArray(filteredChildren) ?
          <HeadlessComboboxOptions className={theme.options()} anchor="bottom start">
            {customValue && query.length ?
              <ComboboxOption value={query}>{query}</ComboboxOption>
            : null}
            {filteredChildren}
          </HeadlessComboboxOptions>
        : null}
      </HeadlessCombobox>
    );
  },
);

export const comboboxTheme: ComponentTheme<typeof useComboboxTheme> = {
  classNames: {
    root: 'w-full min-w-32',
    input:
      'flex w-full items-center rounded-2 border-2 border-neutral-100 hover:border-neutral-200 bg-white px-2.5 h-9 pr-9 gap-x-2 transition-colors shadow-inner font-sans text-sm',
    icon: 'text-neutral-500 size-5 top-2 right-2 cursor-pointer',
    options:
      'flex flex-col gap-y-1 shadow p-1 z-30 rounded-2 border-2 border-neutral-100 hover:border-neutral-200 bg-white text-left w-[var(--input-width)] [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] [scrollbar-width:thin] empty:invisible transition-colors',
  },
  variants: {
    disabled: {
      true: {
        root: 'border-neutral-100 text-neutral-200 cursor-not-allowed',
        input: '',
        icon: 'text-neutral-200',
        options: 'border-neutral-100',
      },
      false: {
        root: '',
        input: '',
        icon: '',
        options: '',
      },
    },
    invalid: {
      true: {
        root: '',
        input: '',
        icon: '',
        options: '',
      },
      false: {
        root: '',
        input: '',
        icon: '',
        options: '',
      },
    },
  },
};

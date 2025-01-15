import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOptions as HeadlessListboxOptions,
  type ListboxProps as HeadlessListboxProps,
} from '@headlessui/react';
import {
  type ChangeEvent,
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  Fragment,
  type KeyboardEvent,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {Icon} from './Icon.js';
import {Input} from './Input.js';
import {useFormId} from './internals.js';
import {ListboxOption} from './ListboxOption.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useListboxTheme = createComponentTheme('Listbox', {
  variants: {disabled: [true, false], invalid: [true, false]},
  elements: ['root', 'label', 'icon', 'options', 'filter'],
});

const LISTBOX_ELEMENT = Fragment;

export type ListboxItem<V> = {
  value: V;
  label: string;
};

export type ListboxProps<
  T extends ElementType,
  V extends boolean | number | string,
> = ComponentProps<typeof useListboxTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren &
  (
    | {
        as?: T | undefined;
        value?: V[] | undefined;
        defaultValue?: V[] | undefined;
        multiple: true;
        hideSelected?:
          | {
              limit: number;
              message?: string | undefined;
            }
          | undefined;
        items?: Array<ListboxItem<V>> | undefined;
        placeholder?: string;
        name?: string | undefined;
        className?: string | undefined;
        showFilter?: boolean | undefined;
        onChange?: (selectedValue: V[]) => void;
      }
    | {
        as?: T | undefined;
        value?: V | undefined;
        defaultValue?: V | undefined;
        multiple?: false | undefined;
        hideSelected?: never; // must be here so the type of props is correct
        items?: Array<ListboxItem<V>> | undefined;
        placeholder?: string;
        name?: string | undefined;
        className?: string | undefined;
        showFilter?: boolean | undefined;
        onChange?: (selectedValue: V) => void;
      }
  );

export function Listbox<
  T extends ElementType = typeof LISTBOX_ELEMENT,
  V extends boolean | number | string = string,
>({
  disabled = false,
  invalid = false,
  as = LISTBOX_ELEMENT as unknown as T,
  value,
  defaultValue,
  multiple,
  hideSelected,
  items,
  placeholder,
  name,
  className,
  showFilter,
  onChange,
  ref,
  children,
  ...rest
}: ListboxProps<T, V>) {
  let theme = useListboxTheme({disabled, invalid});
  let formId = useFormId();
  let field = useField();
  let fieldName = useFieldName();
  let [query, setQuery] = useState('');
  let inputRef = useRef<HTMLInputElement>(null);

  let handleChange = useCallback(
    (selectedValue: V) => {
      onChange?.(selectedValue as V & V[]);
    },
    [onChange],
  );

  // hacky solution so the user is able to focus inout used for filtering
  let handleTab = useCallback(
    (event: KeyboardEvent) => {
      if (!showFilter) {
        return;
      }

      if (event.key === 'Tab' && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    },
    [showFilter],
  );

  let handleQueryChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  if (items && children) {
    throw new Error('Combobox accepts only either `items` prop, or children!');
  }

  let filteredItems =
    query ?
      items?.filter((item) =>
        item.label
          .toLowerCase()
          .replaceAll(/\s+/g, '')
          .includes(query.toLowerCase().replaceAll(/\s+/g, '')),
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
            .replaceAll(/\s+/g, '')
            .includes(query.toLowerCase().replaceAll(/\s+/g, ''))
        ) {
          return true;
        }

        return false;
      })
    : children;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessListboxProps<any, any> = {
    as,
    ref,
    name: field?.name ?? fieldName ?? name,
    value: value ?? undefined,
    defaultValue,
    multiple,
    disabled,
    invalid,
    form: formId,
    onChange: handleChange,
    ...rest,
  };

  return (
    <HeadlessListbox {...props}>
      <HeadlessListboxButton
        className={theme.root('relative', className)}
        data-component="listbox"
        data-multiple={multiple ? true : null}
      >
        {({value: selectedValue}) => {
          if (!items && !multiple) {
            let selectedItem: ReactNode;

            Children.forEach(filteredChildren, (child) => {
              if (!child) {
                return;
              }

              if (
                typeof child === 'object' &&
                'props' in child &&
                typeof child.props === 'object' &&
                (child.props as Record<string, unknown>).value === selectedValue
              ) {
                selectedItem = (child.props as Record<string, unknown>).children as ReactNode;
              }
            });

            return (
              <>
                <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                  {selectedItem ?? placeholder ?? null}
                </span>
                <span className={theme.icon('absolute')}>
                  <Icon name="ChevronUpDown" />
                </span>
              </>
            );
          } else if (!items && multiple) {
            let itemsHidden = false;
            let selectedItems: ReactNode[] = [];

            Children.forEach(filteredChildren, (child) => {
              if (!child) {
                return;
              }

              if (
                typeof child === 'object' &&
                'props' in child &&
                typeof child.props === 'object' &&
                (selectedValue as unknown[]).includes(
                  (child.props as Record<string, unknown>).value,
                )
              ) {
                selectedItems.push((child.props as Record<string, unknown>).children as ReactNode);
              }
            });

            if (hideSelected && selectedItems.length > hideSelected.limit) {
              selectedItems = selectedItems.slice(0, hideSelected.limit);
              itemsHidden = true;
            }

            return (
              <>
                {selectedItems.length ?
                  selectedItems.map((selectedItem, index) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key -- needed
                      key={index}
                      className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                    >
                      {selectedItem}
                    </span>
                  ))
                : (placeholder ?? null)}
                {itemsHidden ?
                  <span
                    data-ellipsis
                    className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                  >
                    {hideSelected?.message ?? '…'}
                  </span>
                : null}
                <span className={theme.icon('absolute')}>
                  <Icon name="ChevronUpDown" />
                </span>
              </>
            );
          } else if (items && multiple) {
            let itemsHidden = false;
            let selectedItems =
              filteredItems?.filter((item) =>
                Boolean((selectedValue as unknown[] | undefined)?.includes(item.value)),
              ) ?? [];

            if (hideSelected && selectedItems.length > hideSelected.limit) {
              selectedItems = selectedItems.slice(0, hideSelected.limit);
              itemsHidden = true;
            }

            return (
              <>
                {selectedItems.length ?
                  selectedItems.map((selectedItem, index) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key -- needed
                      key={index}
                      className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                    >
                      {selectedItem.label}
                    </span>
                  ))
                : (placeholder ?? null)}
                {itemsHidden ?
                  <span
                    data-ellipsis
                    className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                  >
                    {hideSelected?.message ?? '…'}
                  </span>
                : null}
                <span className={theme.icon('absolute')}>
                  <Icon name="ChevronUpDown" />
                </span>
              </>
            );
          }

          let selectedItem = filteredItems?.find((item) => item.value === selectedValue);

          return (
            <>
              <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                {selectedItem?.label ?? placeholder ?? null}
              </span>
              <span className={theme.icon('absolute')}>
                <Icon name="ChevronUpDown" />
              </span>
            </>
          );
        }}
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        anchor="bottom start"
        className={theme.options()}
        onKeyDown={handleTab}
      >
        {showFilter ?
          <div className={theme.filter()}>
            <Input ref={inputRef} showClearButton value={query} onInput={handleQueryChange} />
          </div>
        : null}
        {items ?
          filteredItems?.map((item) => (
            <ListboxOption key={item.label} value={item.value}>
              {item.label}
            </ListboxOption>
          ))
        : filteredChildren}
      </HeadlessListboxOptions>
    </HeadlessListbox>
  );
}

export const listboxTheme: ComponentTheme<typeof useListboxTheme> = {
  classNames: {
    root: 'flex w-full min-w-32 items-center rounded-2 border-2 border-neutral-100 hover:border-neutral-200 bg-white px-2.5 h-9 pr-9 gap-x-2 transition-colors shadow-inner font-sans text-sm',
    label: 'flex gap-x-2',
    icon: 'text-neutral-500 size-5 top-1.5 right-1.5 cursor-pointer',
    options:
      'flex flex-col gap-y-1 shadow p-1 z-30 rounded-2 border-2 border-neutral-100 hover:border-neutral-200 bg-white text-left w-[var(--button-width)] [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] [scrollbar-width:thin] empty:invisible transition-colors',
    filter: '[&>[data-component=input]]:rounded',
  },
  variants: {
    disabled: {
      true: {
        root: 'border-neutral-100 text-neutral-200 cursor-not-allowed',
        label: '',
        icon: 'text-neutral-200',
        options: 'border-neutral-100',
        filter: '',
      },
      false: {
        root: '',
        label: '',
        icon: '',
        options: '',
        filter: '',
      },
    },
    invalid: {
      true: {
        root: '',
        label: '',
        icon: '',
        options: '',
        filter: '',
      },
      false: {
        root: '',
        label: '',
        icon: '',
        options: '',
        filter: '',
      },
    },
  },
};

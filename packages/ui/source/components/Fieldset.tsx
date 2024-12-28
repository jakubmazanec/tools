import {
  Fieldset as HeadlessFieldset,
  type FieldsetProps as HeadlessFieldsetProps,
} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {filterProps} from './internals.js';

export const useFieldsetTheme = createComponentTheme('Fieldset', {
  variants: {
    disabled: [true, false],
  },
});

const FIELDSET_ELEMENT = 'fieldset';

export type FieldsetProps<T extends ElementType> = ComponentProps<typeof useFieldsetTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string | undefined;
  };

export const Fieldset = <T extends ElementType = typeof FIELDSET_ELEMENT>({
  as = FIELDSET_ELEMENT as T,
  disabled = false,
  className,
  ref,
  children,
  ...rest
}: FieldsetProps<T>) => {
  let theme = useFieldsetTheme({disabled});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  let props: HeadlessFieldsetProps<any> = filterProps({
    as,
    ref,
    disabled,
    className: theme(null, className),
    'data-component': 'fieldset',
    ...rest,
  });

  return <HeadlessFieldset {...props}>{children}</HeadlessFieldset>;
};

export const fieldsetnTheme: ComponentTheme<typeof useFieldsetTheme> = {
  className:
    'flex flex-col gap-y-6 [&>[data-component=legend]+[data-component=text]]:text-sm [&>[data-component=legend]+[data-component=text]]:-mt-4',
  variants: {
    disabled: {
      true: '',
      false: '',
    },
  },
};

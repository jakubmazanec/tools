import {type FormMetadata, FormProvider} from '@conform-to/react';
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {FormIdContext} from './internals.js';

export const useFormTheme = createComponentTheme('Form');

const FORM_ELEMENT = 'form';

export type FormProps<T extends ElementType> = ComponentProps<typeof useFormTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren & {
    as?: T | undefined;
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    form?: FormMetadata<any, any> | undefined;
  };

export const Form = <T extends ElementType = typeof FORM_ELEMENT>({
  as: Component = FORM_ELEMENT as T,
  className,
  form,
  ref,
  children,
  ...rest
}: FormProps<T>) => {
  let theme = useFormTheme();

  if (form) {
    let props = {
      ref,
      id: form.id,
      method: 'post',
      className: theme(null, className),
      onSubmit: form.onSubmit,
      'data-component': 'form',
      ...rest,
    };

    return (
      <FormIdContext value={form.id}>
        <FormProvider context={form.context}>
          {createElement(Component, props, children)}
        </FormProvider>
      </FormIdContext>
    );
  }

  let props = {
    ref,
    method: 'post',
    className: theme(null, className),
    'data-component': 'form',
    ...rest,
  };

  return createElement(Component, props, children);
};

export const formTheme: ComponentTheme<typeof useFormTheme> = {
  className: 'flex flex-col gap-y-6',
};

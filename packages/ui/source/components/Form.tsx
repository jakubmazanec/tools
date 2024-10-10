import {type FormMetadata, FormProvider} from '@conform-to/react';
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {formIdContext, forwardRef} from './internals.js';

export const useFormTheme = createComponentTheme('Form');

const FORM_ELEMENT = 'form';

export type FormProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useFormTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
      form?: FormMetadata<any, any> | undefined;
    }
>;

export const Form = forwardRef(
  <T extends ElementType = typeof FORM_ELEMENT>(
    {as: Component = FORM_ELEMENT as T, className, form, children, ...rest}: FormProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
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
        <formIdContext.Provider value={form.id}>
          <FormProvider context={form.context}>
            {createElement(Component, props, children)}
          </FormProvider>
        </formIdContext.Provider>
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
  },
);

export const formTheme: ComponentTheme<typeof useFormTheme> = {
  className: 'flex flex-col gap-y-6',
};

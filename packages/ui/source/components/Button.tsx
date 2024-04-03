import {Button as HeadlessButton, type ButtonProps as HeadlessButtonProps} from '@headlessui/react';
import {
  Children,
  cloneElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  isValidElement,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {Icon} from './Icon.js';
import {forwardRef} from './internals.js';
import {Spinner} from './Spinner.js';

export const useButtonTheme = createComponentTheme('Button', {
  variants: {
    variant: ['solid', 'outline', 'text'],
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
  },
});

const BUTTON_ELEMENT = 'button';

export type ButtonProps<T extends ElementType> = ComponentProps<typeof useButtonTheme> &
  Omit<ComponentPropsWithoutRef<T>, 'type'> & {
    as?: T | undefined;
    submit?: boolean | undefined;
    idle?: boolean | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    children?: HeadlessButtonProps['children'] | undefined; // sadly, we cannot use `T`'s children type, because Headless UI always, if `children` is function, calls it with its own render props documented here: https://headlessui.com/react/button#using-render-props
  };

export const Button = forwardRef(
  <T extends ElementType = typeof BUTTON_ELEMENT>(
    {
      variant = 'solid',
      size = 'medium',
      disabled = false,
      as = BUTTON_ELEMENT as T,
      idle = true,
      autoFocus = false,
      submit = false,
      className,
      children,
      ...rest
    }: ButtonProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useButtonTheme({variant, size, disabled});

    let props: Record<string, unknown> = {
      as,
      ref,
      className: theme(disabled ? 'pointer-events-none' : null, className),
      disabled: disabled || (submit && !idle),
      autoFocus,
      'data-component': 'button',
      ...rest,
    };

    if (as === BUTTON_ELEMENT) {
      props.type = 'button';
    }

    if (submit) {
      props.type = 'submit';
    }

    if (typeof children === 'function') {
      return <HeadlessButton {...props}>{children}</HeadlessButton>;
    }

    let enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child) && (child.type === Icon || child.type === Spinner)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        return cloneElement<any>(child, {'data-icon': ''});
      }

      return child;
    });

    return (
      <HeadlessButton {...props}>
        {submit && !idle ?
          <Spinner data-icon />
        : null}
        {enhancedChildren}
      </HeadlessButton>
    );
  },
);

export const buttonTheme: ComponentTheme<typeof useButtonTheme> = {
  className:
    'rounded-2 flex items-center justify-center text-nowrap font-sans font-medium text-sm transition-colors',
  variants: {
    variant: {
      solid: 'bg-gray-900 text-white hover:bg-gray-800',
      outline: 'border-2 border-gray-100 hover:border-gray-200',
      text: 'border-2 border-transparent hover:border-gray-200',
    },
    size: {
      small: 'text-sm leading-6 px-2.5 h-8 gap-x-2 min-w-8',
      medium: 'leading-6 px-2.5 h-9 gap-x-2 min-w-9',
      large: 'text-lg leading-6 px-3 h-10 gap-x-2 min-w-10',
    },
    disabled: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      size: 'small',
      className: 'px-3',
    },
    {
      variant: 'solid',
      size: 'medium',
      className: 'px-3',
    },
    {
      variant: 'solid',
      size: 'large',
      className: 'px-3.5',
    },
    {
      variant: 'solid',
      disabled: true,
      className: 'bg-gray-200 text-white hover:bg-gray-200',
    },
    {
      variant: 'outline',
      disabled: true,
      className: 'hover:border-gray-100 text-gray-200',
    },
    {
      variant: 'text',
      disabled: true,
      className: 'hover:border-transparent text-gray-200',
    },
  ],
};

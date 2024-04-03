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
    variant: ['solid', 'outline', 'text', 'invisible'],
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
      solid: 'text-white bg-neutral-900 hover:bg-neutral-800',
      outline: 'text-neutral-950 border-2 border-neutral-100 hover:border-neutral-200',
      text: 'text-neutral-950 border-2 border-transparent hover:border-neutral-200',
      invisible: 'cursor-default text-neutral-200 hover:text-neutral-600 select-none',
    },
    size: {
      small: 'text-sm leading-6 px-2.5 h-8 min-w-8 gap-x-2',
      medium: 'leading-6 px-2.5 h-9 min-w-9 gap-x-2',
      large: 'text-lg leading-6 px-3 h-10 min-w-10 gap-x-2',
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
      variant: 'invisible',
      size: 'small',
      className: 'text-xs px-2 h-5 min-w-5',
    },
    {
      variant: 'invisible',
      size: 'medium',
      className: 'px-2 h-6 min-w-6',
    },
    {
      variant: 'invisible',
      size: 'large',
      className: 'px-2 h-7 min-w-7',
    },
    {
      variant: 'solid',
      disabled: true,
      className: 'text-white bg-neutral-200 hover:bg-neutral-200',
    },
    {
      variant: 'outline',
      disabled: true,
      className: 'text-neutral-200 hover:border-neutral-100',
    },
    {
      variant: 'text',
      disabled: true,
      className: 'text-neutral-200 hover:border-transparent',
    },
    {
      variant: 'invisible',
      disabled: true,
      className: 'text-neutral-200 ',
    },
  ],
};

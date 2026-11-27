import {Button as HeadlessButton, type ButtonProps as HeadlessButtonProps} from '@headlessui/react';
import {
  Children,
  cloneElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  isValidElement,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {type ComponentRef} from './ComponentRef.js';
import {Icon} from './Icon.js';
import {Spinner} from './Spinner.js';

export const useButtonTheme = createComponentTheme('Button', {
  variants: {
    variant: ['solid', 'outline', 'text', 'invisible'],
    size: ['small', 'medium', 'large'],
  },
});

const BUTTON_ELEMENT = 'button';

export type ButtonProps<T extends ElementType> = ComponentProps<typeof useButtonTheme> &
  ComponentRef<T> &
  Omit<ComponentPropsWithoutRef<T>, 'type'> & {
    as?: T | undefined;
    submit?: boolean | undefined;
    idle?: boolean | undefined;
    disabled?: boolean | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    // ref?: Ref<R> | undefined;
    children?: HeadlessButtonProps['children'] | undefined; // sadly, we cannot use `T`'s children type, because Headless UI always, if `children` is function, calls it with its own render props documented here: https://headlessui.com/react/button#using-render-props
  };

export function Button<T extends ElementType = typeof BUTTON_ELEMENT>({
  variant = 'solid',
  size = 'medium',
  disabled,
  as = BUTTON_ELEMENT as T,
  idle = true,
  autoFocus = false,
  submit = false,
  className,
  onClick,
  ref,
  children,
  ...rest
}: ButtonProps<T>) {
  let theme = useButtonTheme({variant, size});
  let pending = submit && !idle;
  let props: Record<string, unknown> = {
    as,
    ref,
    className: theme('data-disabled:not-disabled:pointer-events-none', className),
    // Headless UI ignores a parent's disabled state when given `false`, so pass `undefined`
    disabled: pending || disabled ? true : undefined,
    'data-pending': pending ? '' : undefined,
    autoFocus,
    'data-component': 'button',
    // A disabled Headless UI element turns its existing onClick into preventDefault, which
    // stops a link's click (fired by mouse and Enter); it adds no handler, so always pass one.
    onClick: onClick ?? (() => {}),
    ...rest,
  };

  if (as === BUTTON_ELEMENT) {
    props.type = 'button';
  }

  if (submit) {
    props.type = 'submit';
  }

  if (disabled && as !== BUTTON_ELEMENT) {
    props['aria-disabled'] = true;
    props.tabIndex = -1;
  }

  if (typeof children === 'function') {
    return <HeadlessButton {...props}>{children}</HeadlessButton>;
  }

  let enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && (child.type === Icon || child.type === Spinner)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
      return cloneElement<any>(child, {'data-slot': 'icon'});
    }

    if (!isValidElement(child) && typeof child === 'string') {
      return <span data-slot="text">{child}</span>;
    }

    return child;
  });

  return (
    <HeadlessButton {...props}>
      {pending ?
        <Spinner data-icon />
      : null}
      {enhancedChildren}
    </HeadlessButton>
  );
}

export const buttonTheme: ComponentTheme<typeof useButtonTheme> = {
  className:
    'rounded-2 inline-flex items-center justify-center text-nowrap font-sans font-medium text-sm transition-colors',
  variants: {
    variant: {
      solid:
        'text-white bg-neutral-900 hover:bg-neutral-800 data-disabled:not-data-pending:bg-neutral-200 data-disabled:not-data-pending:hover:bg-neutral-200 data-pending:hover:bg-neutral-900',
      outline:
        'text-neutral-950 border-2 border-neutral-100 hover:border-neutral-200 data-disabled:not-data-pending:text-neutral-200 data-disabled:hover:border-neutral-100',
      text: 'text-neutral-950 border-2 border-transparent hover:border-neutral-200 data-disabled:not-data-pending:text-neutral-200 data-disabled:hover:border-transparent',
      invisible:
        'cursor-default text-neutral-200 hover:text-neutral-600 select-none data-disabled:hover:text-neutral-200',
    },
    size: {
      small:
        'text-sm leading-6 px-2.5 h-8 min-w-8 gap-x-1 *:first:data-[slot=icon]:-ml-2 *:last:data-[slot=icon]:-mr-2',
      medium:
        'leading-6 px-2.5 h-9 min-w-9 gap-x-1 *:first:data-[slot=icon]:-ml-1.5 *:last:data-[slot=icon]:-mr-1.5',
      large:
        'text-lg leading-6 px-3 h-10 min-w-10 gap-x-1 *:first:data-[slot=icon]:-ml-1 *:last:data-[slot=icon]:-mr-1',
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
  ],
};

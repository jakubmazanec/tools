import {Radio as HeadlessRadio, type RadioProps as HeadlessRadioProps} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type Ref} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {Icon} from './Icon.js';
import {forwardRef} from './internals.js';

export const useRadioTheme = createComponentTheme('Radio', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'icon'],
});

const RADIO_ELEMENT = 'span';

export type RadioProps<T extends ElementType, V extends boolean | number | string> = ComponentProps<
  typeof useRadioTheme
> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    value: V;
    autoFocus?: boolean | undefined;
    className?: string;
  };

export const Radio = forwardRef(
  <T extends ElementType = typeof RADIO_ELEMENT, V extends boolean | number | string = string>(
    {
      disabled = false,
      as = RADIO_ELEMENT as T,
      value,
      autoFocus,
      className,
      ...rest
    }: RadioProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useRadioTheme({disabled});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessRadioProps<any, V> = {
      as,
      ref,
      value,
      disabled,
      autoFocus,
      className: theme.root('relative', className),
      'data-component': 'radio',
      ...rest,
    };

    return (
      <HeadlessRadio {...props}>
        <span className={theme.icon()}>
          <Icon>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
              <circle cx="10" cy="10" fill="currentColor" r="4" />
            </svg>
          </Icon>
        </span>
      </HeadlessRadio>
    );
  },
);

export const radioTheme: ComponentTheme<typeof useRadioTheme> = {
  classNames: {
    root: 'group/radio inline-block size-5',
    icon: 'flex justify-content justify-item size-5 *:rounded-full *:bg-white *:border-2 *:border-neutral-100 *:hover:border-neutral-200 *:shadow-inner *:transition-colors *:text-transparent *:hover:text-neutral-100 group-data-[checked]/radio:*:bg-neutral-950 group-data-[checked]/radio:*:border-neutral-950 group-data-[checked]/radio:*:text-white',
  },
  variants: {
    disabled: {
      true: {
        root: 'border-neutral-100 text-neutral-200 cursor-not-allowed',
        icon: 'opacity-0',
      },
      false: {
        root: '',
        icon: '',
      },
    },
  },
};

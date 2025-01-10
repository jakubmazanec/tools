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

export const useCardTheme = createComponentTheme('Card');

const CARD_ELEMENT = 'button';

export type CardProps<T extends ElementType> = ComponentProps<typeof useCardTheme> &
  ComponentPropsWithoutRef<T> &
  ComponentRef<T> &
  PropsWithChildren<{
    as?: T | undefined;
    className?: string;
  }>;

export function Card<T extends ElementType = typeof CARD_ELEMENT>({
  as: Component = CARD_ELEMENT as T,
  className,
  ref,
  children,
  ...rest
}: CardProps<T>) {
  let theme = useCardTheme();
  let props = {
    ref,
    className: theme(null, className),
    'data-component': 'card',
    ...rest,
  };

  return createElement(Component, props, children);
}

export const cardTheme: ComponentTheme<typeof useCardTheme> = {
  className: 'rounded-2 border border-neutral-100 p-4',
};

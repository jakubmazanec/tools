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
import {forwardRef} from './internals.js';

export const useCardTheme = createComponentTheme('Card');

const CARD_ELEMENT = 'div';

export type CardProps<T extends ElementType> = ComponentProps<typeof useCardTheme> &
  ComponentPropsWithoutRef<T> &
  PropsWithChildren<{
    as?: T | undefined;
    className?: string;
  }>;

export const Card = forwardRef(
  <T extends ElementType = typeof CARD_ELEMENT>(
    {as: Component = CARD_ELEMENT as T, className, children, ...rest}: CardProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useCardTheme();
    let props = {
      ref,
      className: theme(null, className),
      'data-component': 'card',
      ...rest,
    };

    return createElement(Component, props, children);
  },
);

export const cardTheme: ComponentTheme<typeof useCardTheme> = {
  className: 'rounded-2 border border-neutral-100 p-4',
};

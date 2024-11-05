import {
  Description as HeadlessDescription,
  type DescriptionProps as HeadlessDescriptionProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';
import {filterProps, forwardRef} from './internals.js';

export const useDescriptionTheme = createComponentTheme('Description');

const DESCRIPTION_ELEMENT = 'p';

export type DescriptionProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useDescriptionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string | undefined;
    }
>;

export const Description = forwardRef(
  <T extends ElementType = typeof DESCRIPTION_ELEMENT>(
    {as = DESCRIPTION_ELEMENT as T, className, children, ...rest}: DescriptionProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useDescriptionTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessDescriptionProps<any> = filterProps({
      as,
      ref,
      className: theme(null, className),
      'data-component': 'description',
      ...rest,
    });

    return <HeadlessDescription {...props}>{children}</HeadlessDescription>;
  },
);

export const descriptionTheme: ComponentTheme<typeof useDescriptionTheme> = {
  className: 'font-sans text-sm',
};
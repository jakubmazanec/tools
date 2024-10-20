import {Label as HeadlessLabel, type LabelProps as HeadlessLabelProps} from '@headlessui/react';
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

export const useLabelTheme = createComponentTheme('Label');

const LABEL_ELEMENT = 'label';

export type LabelProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useLabelTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      className?: string;
    }
>;

export const Label = forwardRef(
  <T extends ElementType = typeof LABEL_ELEMENT>(
    {as = LABEL_ELEMENT as T, className, children, ...rest}: LabelProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useLabelTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessLabelProps<any> = filterProps({
      as,
      ref,
      className: theme(null, className),
      'data-component': 'label',
      ...rest,
    });

    return <HeadlessLabel {...props}>{children}</HeadlessLabel>;
  },
);

export const labelTheme: ComponentTheme<typeof useLabelTheme> = {
  className: 'block cursor-pointer font-sans text-sm font-medium',
};

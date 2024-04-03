import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';

export const useRadioFieldTheme = createComponentTheme('RadioField');

export type RadioFieldProps = PropsWithChildren<
  ComponentProps<typeof useRadioFieldTheme> & {
    className?: string;
  }
>;

export function RadioField({className, children}: RadioFieldProps) {
  let theme = useRadioFieldTheme();

  return (
    <HeadlessField className={theme(null, className)} data-component="radio-field">
      {children}
    </HeadlessField>
  );
}

export const radioFieldTheme: ComponentTheme<typeof useRadioFieldTheme> = {
  className:
    'grid grid-cols-[theme(spacing.5)_1fr] gap-x-2 gap-y-1 [&>[data-component=description]]:col-start-2',
};

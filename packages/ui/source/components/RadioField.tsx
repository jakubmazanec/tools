import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {
  type ComponentProps,
  type ComponentTheme,
  createComponentTheme,
} from '../theme/internals.js';

export const useRadioFieldTheme = createComponentTheme('RadioField');

export type RadioFieldProps = ComponentProps<typeof useRadioFieldTheme> &
  PropsWithChildren & {
    disabled?: boolean | undefined;
    className?: string;
  };

export function RadioField({disabled, className, children}: RadioFieldProps) {
  let theme = useRadioFieldTheme();

  return (
    <HeadlessField
      className={theme(null, className)}
      data-component="radio-field"
      // Headless UI ignores a parent's disabled state when given `false`, so pass `undefined`
      disabled={disabled ? true : undefined}
    >
      {children}
    </HeadlessField>
  );
}

export const radioFieldTheme: ComponentTheme<typeof useRadioFieldTheme> = {
  className:
    'grid grid-cols-[theme(spacing.5)_1fr] gap-x-2 gap-y-1 [&>[data-component=description]]:col-start-2',
};

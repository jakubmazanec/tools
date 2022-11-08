import {type BoxProps} from 'ink';

import {type FormConfig} from './FormConfig.js';
import {type FormRowConfig} from './FormRowConfig.js';
import {type FormValues} from './FormValues.js';

/** A type that creates string literal union type with names of rows that need some props. */
type FormRowWithPropsNames<C extends FormConfig> = {
  [P in keyof C['rows']]: C['rows'][P]['type'] extends 'text'
    ? never
    : C['rows'][P]['type'] extends 'confirm'
    ? never
    : C['rows'][P]['type'] extends 'select'
    ? P
    : never;
}[keyof C['rows']];

type FormPropsRow<C extends FormRowConfig> = C['type'] extends 'text'
  ? never
  : C['type'] extends 'confirm'
  ? never
  : C['type'] extends 'select'
  ? {
      choices: Array<{value: string; label: string}>;
    }
  : never;

type FormPropsRows<C extends FormConfig> = Pick<
  {
    [P in keyof C['rows']]: FormPropsRow<C['rows'][P]>;
  },
  FormRowWithPropsNames<C>
>;

/**
 * Form component props.
 */
export type FormProps<C extends FormConfig> = FormPropsRows<C> extends Record<
  number | string | symbol,
  never
>
  ? BoxProps & {
      /** Props for each row. */
      rows?: null | undefined;

      /** Form values */
      values: FormValues<C>;

      /** Handler function that is called when value changes. */
      onChange?: ((formResult: FormValues<C>) => void) | undefined;

      /** Handler function that is called when the value is accepted. */
      onComplete: (formResult: FormValues<C>) => void;
    }
  : BoxProps & {
      /** Props for each row. */
      rows: FormPropsRows<C>;

      /** Form values */
      values: FormValues<C>;

      /** Handler function that is called when value changes. */
      onChange?: ((formResult: FormValues<C>) => void) | undefined;

      /** Handler function that is called when the value is accepted. */
      onComplete: (formResult: FormValues<C>) => void;
    };

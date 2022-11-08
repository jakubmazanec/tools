import {type FormRowConfig} from './FormRowConfig.js';

export type StringFormValue = {value: string; isComplete: boolean};

/**
 * Form value.
 */
export type FormValue<C extends FormRowConfig> = C['type'] extends 'text'
  ? StringFormValue
  : C['type'] extends 'select'
  ? StringFormValue
  : never;

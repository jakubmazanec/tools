import {type FormConfig} from './FormConfig.js';
import {type FormValue} from './FormValue.js';

/**
 * Form values.
 */
export type FormValues<C extends FormConfig> = {
  [P in keyof C['rows']]: FormValue<C['rows'][P]>;
};

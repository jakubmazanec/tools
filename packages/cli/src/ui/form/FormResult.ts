/* eslint-disable @typescript-eslint/no-explicit-any -- needed */
import {type Form} from './Form.js';
import {type FormValues} from './FormValues.js';

/**
 * Form result. It is the value of all form rows after the last one is accepted.
 */
export type FormResult<F extends Pick<Form<any>, 'config'>> = FormValues<F['config']>;

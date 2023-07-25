import {type FC} from 'react';

import {type FormConfig} from './FormConfig.js';
import {type FormProps} from './FormProps.js';

/**
 * Form component.
 */
export type Form<C extends FormConfig> = FC<FormProps<C>> & {config: C};

import {type TemplateRender as BaseTemplateRender} from '@jakubmazanec/template';

import {type templateAttributesSchema} from './TemplateAttributes.js';
import {type templateDataSchema} from './TemplateData.js';

/**
 * A result of rendering a Carson template file.
 */
export type TemplateRender = BaseTemplateRender<
  typeof templateAttributesSchema,
  typeof templateDataSchema
> & {
  template: {
    path: string;
  };
};

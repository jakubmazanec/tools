import {type Template} from '@jakubmazanec/template';

import {type CarsonTemplateConfig} from './CarsonTemplateConfig.js';
import {type templateAttributesSchema} from './TemplateAttributes.js';
import {type templateDataSchema} from './TemplateData.js';

/**
 * Carson template.
 */
export type CarsonTemplate = {
  /** Carson template ID. */
  id: string;

  /** Carson template name. */
  id: string;

  /** Carson template name. */
  name: string;

  /** Carson template config. */
  config: CarsonTemplateConfig;

  /** Carson template files, actually instances of {@link Template}. */
  files: Array<Template<typeof templateAttributesSchema, typeof templateDataSchema>>;
};

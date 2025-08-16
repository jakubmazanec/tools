import {type z} from 'zod';

import {type TemplateRender} from './TemplateRender.js';

export type TemplateRenders<
  A extends z.ZodObject | undefined = undefined,
  D extends z.ZodObject | undefined = undefined,
> = Array<TemplateRender<A, D>>;

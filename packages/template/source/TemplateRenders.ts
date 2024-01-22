import {type z} from 'zod';

import {type TemplateRender} from './TemplateRender.js';

export type TemplateRenders<
  A extends z.AnyZodObject | undefined = undefined,
  D extends z.AnyZodObject | undefined = undefined,
> = Array<TemplateRender<A, D>>;

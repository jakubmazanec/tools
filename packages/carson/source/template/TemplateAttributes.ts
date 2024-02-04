import {z} from 'zod';

// TODO: add strategy 'none' so when you using template A that extends template B, you can overwrite template files to no-op
let strategyTemplateAttributeSchema = z.union([
  z.literal('create'),
  z.literal('ensure'),
  z.literal('overwrite'),
  z.literal('merge'),
  z.literal('check'),
  z.tuple([z.literal('insert'), z.string()]),
]);

export const templateAttributesSchema = z
  .object({
    strategy: strategyTemplateAttributeSchema,
  })
  .strict();

export type TemplateAttributes = z.infer<typeof templateAttributesSchema>;

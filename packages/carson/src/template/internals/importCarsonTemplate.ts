import {parseCarsonTemplateId} from './parseCarsonTemplateId.js';

type Module = {
  [key: string]: unknown;
  default: unknown;
};

export async function importCarsonTemplate(templateId: string) {
  let [moduleId] = parseCarsonTemplateId(templateId);
  let {default: _, ...moduleWithoutDefault} = (await import(moduleId)) as Module;

  return moduleWithoutDefault;
}

import {CarsonTemplateError} from '../CarsonTemplateError.js';

export function parseCarsonTemplateId(value: string): [moduleId: string, templateName: string] {
  let parts = value.split(':');

  if (!parts[0] || !parts[1]) {
    throw new CarsonTemplateError('INVALID_CARSON_TEMPLATE_ID', {
      messageParameters: [value],
    });
  }

  return [parts[0], parts[1]];
}

import * as z from 'zod';

function zodIssuePathToText(zodIssuePath: Array<number | string>): string {
  return zodIssuePath.length > 0 ? ` at path "${zodIssuePath.join('.')}"` : '';
}

function zodIssueToString(zodIssue: z.ZodIssue): string {
  if (zodIssue.code === z.ZodIssueCode.invalid_type) {
    return `Expected "${zodIssue.expected}" but received "${zodIssue.received}"${zodIssuePathToText(
      zodIssue.path,
    )}`;
  }

  if (zodIssue.code === z.ZodIssueCode.unrecognized_keys) {
    return `Unrecognized ${zodIssue.keys.length >= 2 ? 'keys' : 'key'} ${zodIssue.keys
      .map((key) => `"${key}"`)
      .join(', ')}${zodIssuePathToText(zodIssue.path)}`;
  }

  if (zodIssue.code === z.ZodIssueCode.invalid_union) {
    return `Invalid union: ${zodIssue.unionErrors
      .map((unionError) =>
        unionError.issues
          .map((issue) => {
            let zodIssueString = [...zodIssueToString(issue)];

            zodIssueString[0] &&= zodIssueString[0].toLowerCase();

            return zodIssueString.join('');
          })
          .join(', '),
      )
      .join('; ')}`;
  }

  if (zodIssue.code === z.ZodIssueCode.invalid_enum_value) {
    return `Expected ${
      zodIssue.options.length === 1 ?
        `"${zodIssue.options[0]}"`
      : `${zodIssue.options
          .map((option) => `"${option}"`)
          .slice(0, -1)
          .join(', ')} or "${zodIssue.options.at(-1)}"`
    }${zodIssuePathToText(zodIssue.path)}`;
  }

  return `${zodIssue.message}${zodIssuePathToText(zodIssue.path)}`;
}

export function zodIssuesToStrings(zodIssues: z.ZodIssue[]): string[] {
  return zodIssues.map((zodIssue) => zodIssueToString(zodIssue));
}

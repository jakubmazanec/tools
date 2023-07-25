import {createCustomError} from '@jakubmazanec/error';

/**
 * A subclass of `Error` that indicates a program failure.
 */
export const ProgramError = createCustomError('ProgramError', {
  NO_NESTED_RENDER:
    'A React render process already exists. This usually occurs by triggering nested render calls.',
});

import {twMerge} from 'tailwind-merge';

import {type ClassName} from './ClassName.js';

// TODO: is the merging done correctly? write some tests
export function cx(...inputs: ClassName[]) {
  return twMerge(...inputs);
}

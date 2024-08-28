import {createTailwindConfig, createTailwindMerge} from '../../development.js';
import {type ClassName} from './ClassName.js';

let merge = createTailwindMerge(createTailwindConfig());

export function cx(...inputs: ClassName[]) {
  return merge(...inputs);
}

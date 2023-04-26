import {type Argv} from '../types.js';
import {isShortOptionsGroup} from './isShortOptionsGroup.js';

/**
 * A function that converts any argument that is a short options group into separate short options.
 *
 * @param argv Arguments.
 * @return Arguments that contain no short options group
 */
export function expandArguments(argv: Argv): Argv {
  let expandedArguments = [];

  for (let arg of argv) {
    if (isShortOptionsGroup(arg)) {
      expandedArguments.push(...[...arg].slice(1).map((value) => `-${value}`));
    } else {
      expandedArguments.push(arg);
    }
  }

  return expandedArguments;
}

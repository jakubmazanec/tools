import {type Argv} from '../Argv.js';
import {isShortOptionsGroup} from './isShortOptionsGroup.js';

/**
 * Converts short options group in a provided list of arguments into separate short options.
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

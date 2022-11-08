import chalk from 'chalk';

import * as colors from './colors.js';

export const question = chalk[colors.notice]('?');
export const info = chalk[colors.info]('i');
export const success = chalk[colors.success]('✓');
export const warning = chalk[colors.warning]('▲');
export const error = chalk[colors.failure]('×');
export const unselectedSquare = chalk[colors.unselected]('◻');
export const selectedSquare = chalk[colors.selected]('◼');
export const unselectedCircle = chalk[colors.unselected]('○');
export const selectedCircle = chalk[colors.selected]('●');

import {type ColumnPinningState} from '@tanstack/react-table';

import {type DataTableColumnPinning} from '../DataTableColumnPinning.js';

export function fromPinningState(pinning: ColumnPinningState) {
  let result: DataTableColumnPinning = {};

  for (let start of pinning.start) {
    result[start] = 'start';
  }

  for (let end of pinning.end) {
    result[end] = 'end';
  }

  return result;
}

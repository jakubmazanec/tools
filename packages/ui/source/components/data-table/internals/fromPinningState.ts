import {type ColumnPinningState} from '@tanstack/react-table';

import {type DataTableColumnPinning} from '../DataTableColumnPinning.js';

export function fromPinningState(pinning: ColumnPinningState) {
  let result: DataTableColumnPinning = {};

  for (let left of pinning.left ?? []) {
    result[left] = 'left';
  }

  for (let right of pinning.right ?? []) {
    result[right] = 'right';
  }

  return result;
}

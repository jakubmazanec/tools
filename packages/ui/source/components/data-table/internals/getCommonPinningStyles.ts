import {type Column} from '@tanstack/react-table';
import {type CSSProperties} from 'react';

import {type DataTableFeatures} from './dataTableFeatures.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export function getCommonPinningStyles(column: Column<DataTableFeatures, any>): CSSProperties {
  let isPinned = column.getIsPinned();

  return {
    left: isPinned === 'start' ? `${column.getStart('start')}px` : undefined,
    right: isPinned === 'end' ? `${column.getAfter('end')}px` : undefined,
    width: column.getSize(),
  };
}

import {type Column} from '@tanstack/react-table';
import {type CSSProperties} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export function getCommonPinningStyles(column: Column<any>): CSSProperties {
  let isPinned = column.getIsPinned();

  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    width: column.getSize(),
  };
}

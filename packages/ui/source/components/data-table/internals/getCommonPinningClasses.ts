import {type Column} from '@tanstack/react-table';

import {type DataTableFeatures} from './dataTableFeatures.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export function getCommonPinningClasses(column: Column<DataTableFeatures, any>): string {
  let isPinned = column.getIsPinned();
  let isLastStartPinnedColumn = isPinned === 'start' && column.getIsLastColumn('start');
  let isFirstEndPinnedColumn = isPinned === 'end' && column.getIsFirstColumn('end');
  let borderClassName =
    isLastStartPinnedColumn ? 'pr-2 border-r-2 border-neutral-100'
    : isFirstEndPinnedColumn ? 'pl-2 border-l-2 border-neutral-100'
    : undefined;
  let opacityClassName = isPinned ? 'opacity-90' : 'opacity-100';
  let positionClassName = isPinned ? 'sticky' : 'relative';
  let zIndexClassName = isPinned ? 'z-10' : 'z-0';
  let bgClassName = isPinned ? 'bg-white' : 'bg-transparent';

  return `${bgClassName} ${borderClassName} ${opacityClassName} ${positionClassName} ${zIndexClassName} min-w-16`;
}

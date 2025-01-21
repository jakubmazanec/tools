import {type Column} from '@tanstack/react-table';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export function getCommonPinningClasses(column: Column<any>): string {
  let isPinned = column.getIsPinned();
  let isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  let isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  let borderClassName =
    isLastLeftPinnedColumn ? 'pr-2 border-r-2 border-neutral-100'
    : isFirstRightPinnedColumn ? 'pl-2 border-l-2 border-neutral-100'
    : undefined;
  let opacityClassName = isPinned ? 'opacity-90' : 'opacity-100';
  let positionClassName = isPinned ? 'sticky' : 'relative';
  let zIndexClassName = isPinned ? 'z-10' : 'z-0';
  let bgClassName = isPinned ? 'bg-white' : 'bg-transparent';

  return `${bgClassName} ${borderClassName} ${opacityClassName} ${positionClassName} ${zIndexClassName} min-w-16`;
}

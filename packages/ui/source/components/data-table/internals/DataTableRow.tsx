import {flexRender, type Row} from '@tanstack/react-table';
import {useCallback} from 'react';

import {TableCell} from '../../TableCell.js';
import {TableRow} from '../../TableRow.js';
import {getCommonPinningClasses, getCommonPinningStyles} from '../internals.js';

export type DataTableRowProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  row: Row<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onClick?: ((row: Row<any>) => void) | undefined;
};

export function DataTableRow({row, onClick}: DataTableRowProps) {
  let handleClick = useCallback(() => {
    onClick?.(row);
  }, [onClick, row]);

  return (
    <TableRow className={onClick ? 'cursor-pointer' : undefined} onClick={handleClick}>
      {row.getVisibleCells().map((cell) => {
        let value = cell.getValue();

        return (
          <TableCell
            key={cell.id}
            className={
              getCommonPinningClasses(cell.column) + (onClick ? ' **:pointer-events-none' : '')
            }
            style={{...getCommonPinningStyles(cell.column)}}
            title={value === null || value === undefined ? undefined : String(value)}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

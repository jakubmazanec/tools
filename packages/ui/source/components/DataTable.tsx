import {
  flexRender,
  getCoreRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table';

import {Table} from './Table.js';
import {TableBody} from './TableBody.js';
import {TableCell} from './TableCell.js';
import {TableFoot} from './TableFoot.js';
import {TableHead} from './TableHead.js';
import {TableHeader} from './TableHeader.js';
import {TableRow} from './TableRow.js';

export type DataTableProps<D> = {
  data: D[];
  columns: TableOptions<D>['columns'];
};

export function DataTable<D extends RowData>({data, columns}: DataTableProps<D>) {
  const table = useReactTable<D>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader key={header.id}>
                {header.isPlaceholder ? null : (
                  flexRender(header.column.columnDef.header, header.getContext())
                )}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFoot>
        {table.getFooterGroups().map((footerGroup) => (
          <TableRow key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <TableHeader key={header.id}>
                {header.isPlaceholder ? null : (
                  flexRender(header.column.columnDef.footer, header.getContext())
                )}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableFoot>
    </Table>
  );
}

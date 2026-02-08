import {rankItem} from '@tanstack/match-sorter-utils';
import {type FilterMeta, type Row, type RowData} from '@tanstack/react-table';

export function fuzzyFilter<TData extends RowData>(
  row: Row<TData>,
  columnId: string,
  value: unknown,
  addMeta: (meta: FilterMeta) => void,
) {
  let itemRank = rankItem(row.getValue(columnId), value as string, {});

  // @ts-expect-error - DEBUG
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- DEBUG
  if (row.original.name?.toLowerCase().includes('ardbeg')) {
    console.log(columnId, 'row', row, 'itemRank', itemRank);

    // @ts-expect-error - DEBUG
    if (row.original.order === 2358) {
      // eslint-disable-next-line no-debugger -- DEBUG
      debugger;
    }
  }

  addMeta({itemRank});

  return itemRank.passed;
}

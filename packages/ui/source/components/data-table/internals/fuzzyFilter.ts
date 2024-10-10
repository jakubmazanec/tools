import {rankItem} from '@tanstack/match-sorter-utils';
import {type FilterMeta, type Row, type RowData} from '@tanstack/react-table';

export function fuzzyFilter<TData extends RowData>(
  row: Row<TData>,
  columnId: string,
  value: unknown,
  addMeta: (meta: FilterMeta) => void,
) {
  let itemRank = rankItem(row.getValue(columnId), value as string, {});

  addMeta({itemRank});

  return itemRank.passed;
}

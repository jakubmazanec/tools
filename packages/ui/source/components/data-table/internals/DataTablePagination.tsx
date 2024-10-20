import {type Table} from '@tanstack/react-table';
import {type ChangeEvent, memo, useCallback} from 'react';

import {Button} from '../../Button.js';
import {Icon} from '../../Icon.js';
import {Input} from '../../Input.js';
import {Listbox} from '../../Listbox.js';
import {ListboxOption} from '../../ListboxOption.js';
import {type DataTableProps} from '../DataTable.js';
import {MAX_PAGE_BUTTONS_COUNT, PAGE_SIZES} from './constants.js';
import {DataTablePageButton} from './DataTablePageButton.js';

type PageSize = (typeof PAGE_SIZES)[number];

export type DataTablePaginationProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  table: Table<any>;
  page: number;
  pageSize: number;
  pageCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  clientPagination: DataTableProps<any, any>['clientPagination'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  onPagination: DataTableProps<any, any>['onPagination'];
};

export const DataTablePagination = memo(
  ({
    table,
    page,
    pageSize,
    pageCount,
    clientPagination,
    onPagination,
  }: DataTablePaginationProps) => {
    let isFirstPage = page === 1;
    let isLastPage = page >= pageCount;

    let handlePageClick = useCallback(
      (newPage: number) => {
        if (clientPagination) {
          table.setPageIndex(Math.max(0, Math.min(newPage - 1, pageCount)));
        }

        if (onPagination) {
          onPagination({
            page: Math.max(1, Math.min(newPage, pageCount)),
          });
        }
      },
      [clientPagination, onPagination, pageCount, table],
    );

    let handleFirstPageClick = useCallback(() => {
      if (clientPagination) {
        table.firstPage();
      }

      if (onPagination) {
        onPagination({
          page: 1,
        });
      }
    }, [clientPagination, onPagination, table]);

    let handleLastPageClick = useCallback(() => {
      if (clientPagination) {
        table.lastPage();
      }

      if (onPagination) {
        onPagination({
          page: pageCount,
        });
      }
    }, [clientPagination, onPagination, pageCount, table]);

    let handlePreviousPageClick = useCallback(() => {
      if (clientPagination) {
        table.previousPage();
      }

      if (onPagination) {
        onPagination({
          page: Math.max(1, Math.min(page - 1, pageCount)),
        });
      }
    }, [clientPagination, onPagination, page, pageCount, table]);

    let handleNextPageClick = useCallback(() => {
      if (clientPagination) {
        table.nextPage();
      }

      if (onPagination) {
        onPagination({
          page: Math.max(1, Math.min(page + 1, pageCount)),
        });
      }
    }, [clientPagination, onPagination, page, pageCount, table]);

    let handlePageChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        let pageIndex = event.target.value ? Number(event.target.value) - 1 : 0;

        if (clientPagination) {
          table.setPageIndex(pageIndex);
        }

        if (onPagination) {
          onPagination({
            page: Math.max(1, Math.min(pageIndex + 1, pageCount)),
          });
        }
      },
      [clientPagination, onPagination, pageCount, table],
    );

    let handlePageSizeChange = useCallback(
      (pageSize: string) => {
        if (clientPagination) {
          table.setPageSize(Number(pageSize));
        }

        if (onPagination) {
          onPagination({
            pageSize: Number(pageSize) as PageSize,
          });
        }
      },
      [clientPagination, onPagination, table],
    );

    return (
      <div className="flex items-center gap-x-4 text-sm justify-center">
        <span className="flex items-center gap-x-2">
          <Button
            variant="outline"
            aria-label="First page"
            disabled={isFirstPage}
            onClick={handleFirstPageClick}
          >
            <Icon name="ChevronDoubleLeft" />
          </Button>
          <Button
            variant="outline"
            aria-label="Previous page"
            disabled={isFirstPage}
            onClick={handlePreviousPageClick}
          >
            <Icon name="ChevronLeft" />
          </Button>

          {pageCount <= MAX_PAGE_BUTTONS_COUNT ?
            Array.from({length: pageCount}).map((_, index) => (
              <DataTablePageButton
                // eslint-disable-next-line react/no-array-index-key -- needed, there is no other value
                key={index}
                page={index + 1}
                isSelected={page === index + 1}
                onClick={handlePageClick}
              />
            ))
          : null}

          <Button
            variant="outline"
            aria-label="Next page"
            disabled={isLastPage}
            onClick={handleNextPageClick}
          >
            <Icon name="ChevronRight" />
          </Button>
          <Button
            variant="outline"
            aria-label="Last page"
            disabled={isLastPage}
            onClick={handleLastPageClick}
          >
            <Icon name="ChevronDoubleRight" />
          </Button>
        </span>
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <span className="flex items-center gap-1">
            Page {page} of {pageCount}
          </span>
        : null}
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <span className="flex items-center gap-1">
            Go to page:
            <Input
              type="text"
              pattern="[0-9]*"
              defaultValue={page}
              className="w-12"
              onChange={handlePageChange}
            />
          </span>
        : null}
        <Listbox
          value={String(pageSize)}
          className="w-auto min-w-min"
          onChange={handlePageSizeChange}
        >
          {PAGE_SIZES.map((pageSize) => (
            <ListboxOption key={pageSize} value={String(pageSize)}>
              Show {pageSize}
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    );
  },
);

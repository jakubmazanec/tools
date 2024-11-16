import {type Table} from '@tanstack/react-table';
import {type ChangeEvent, memo, useCallback} from 'react';

import {Button} from '../../Button.js';
import {Container} from '../../Container.js';
import {Icon} from '../../Icon.js';
import {Input} from '../../Input.js';
import {Listbox} from '../../Listbox.js';
import {ListboxOption} from '../../ListboxOption.js';
import {Text} from '../../Text.js';
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
  onPagination: DataTableProps<any, any>['onPaginationChange'];
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
      <Container align="center" justify="center">
        <Container spacing="small">
          <Button
            aria-label="First page"
            disabled={isFirstPage}
            variant="outline"
            onClick={handleFirstPageClick}
          >
            <Icon name="ChevronDoubleLeft" />
          </Button>
          <Button
            aria-label="Previous page"
            disabled={isFirstPage}
            variant="outline"
            onClick={handlePreviousPageClick}
          >
            <Icon name="ChevronLeft" />
          </Button>

          {pageCount <= MAX_PAGE_BUTTONS_COUNT ?
            Array.from({length: pageCount}).map((_, index) => (
              <DataTablePageButton
                // eslint-disable-next-line react/no-array-index-key -- needed, there is no other value
                key={index}
                isSelected={page === index + 1}
                page={index + 1}
                onClick={handlePageClick}
              />
            ))
          : null}

          <Button
            aria-label="Next page"
            disabled={isLastPage}
            variant="outline"
            onClick={handleNextPageClick}
          >
            <Icon name="ChevronRight" />
          </Button>
          <Button
            aria-label="Last page"
            disabled={isLastPage}
            variant="outline"
            onClick={handleLastPageClick}
          >
            <Icon name="ChevronDoubleRight" />
          </Button>
        </Container>
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <Container spacing="extra-small">
            <Text>
              Page {page} of {pageCount}
            </Text>
          </Container>
        : null}
        {pageCount > MAX_PAGE_BUTTONS_COUNT ?
          <Container align="center" spacing="extra-small">
            <Text>Go to page:</Text>
            <Input
              className="w-12"
              defaultValue={page}
              pattern="[0-9]*"
              type="text"
              onChange={handlePageChange}
            />
          </Container>
        : null}
        <Container>
          <Listbox
            className="w-auto min-w-min"
            value={String(pageSize)}
            onChange={handlePageSizeChange}
          >
            {PAGE_SIZES.map((pageSize) => (
              <ListboxOption key={pageSize} value={String(pageSize)}>
                Show {pageSize}
              </ListboxOption>
            ))}
          </Listbox>
        </Container>
      </Container>
    );
  },
);

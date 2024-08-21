import React, { useMemo, useState } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  Column,
  UseSortByInstanceProps,
  UsePaginationInstanceProps,
  TableInstance,
  UsePaginationState,
} from 'react-table';
import './TableContainer.css';
import ChartContainer from './ChartContainer';

export interface Data {
  name: string;
  age: number;
  position: string;
}

const initialData: Data[] = [
  { name: 'John Doe', age: 28, position: 'Developer' },
  { name: 'Jane Smith', age: 34, position: 'Manager' },
  { name: 'Sam Green', age: 45, position: 'Designer' },
  { name: 'Alice Brown', age: 23, position: 'Intern' },
];

const columns: Column<Data>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Position',
    accessor: 'position',
  },
];

type TableInstanceWithHooks<T extends object> = TableInstance<T> &
    UseSortByInstanceProps<T> &
    UsePaginationInstanceProps<T> & {
  state: UsePaginationState<T>;
};

const TableContainer: React.FC = () => {
  const [filteredData, setFilteredData] = useState<Data[]>(initialData);

  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(() => filteredData, [filteredData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable<Data>(
      {
        columns: memoizedColumns,
        data: memoizedData,
        initialState: { pageIndex: 0 },
      },
      useSortBy,
      usePagination,
  ) as TableInstanceWithHooks<Data>;

  const handleBarClick = (clickedData: Data[]) => {
    setFilteredData(clickedData.length > 0 ? clickedData : initialData);
  };

  return (
      <div className="table-container">
        <table {...getTableProps()} className="table">
          <thead>
          {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                    </th>
                ))}
              </tr>
          ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render('Cell')}
                      </td>
                  ))}
                </tr>
            );
          })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <span>
          Page{' '}
            <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
        <ChartContainer data={initialData} onBarClick={handleBarClick} /> {/* Передаем колбэк */}
      </div>
  );
};

export default TableContainer;

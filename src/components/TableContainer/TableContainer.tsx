import { FC, useEffect, useMemo, useState } from 'react'
import {
  useTable,
  useSortBy,
  usePagination,
  Column,
  UseSortByInstanceProps,
  UsePaginationInstanceProps,
  TableInstance,
  UsePaginationState,
} from 'react-table'
import './TableContainer.css'
import { DataType, IData } from '../../types/types'
import { ChartContainer } from '../ChartContainer/ChartContainer'

type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseSortByInstanceProps<T> &
  UsePaginationInstanceProps<T> & {
    state: UsePaginationState<T>
  }

interface ITableContainerProps {
  data: DataType[]
}

const TableContainer: FC<ITableContainerProps> = (props) => {
  const { data: initialData } = props

  const [filteredData, setFilteredData] = useState<DataType[]>(initialData)

  useEffect(() => {
    setFilteredData(initialData)
  }, [initialData])

  const columns = useMemo(() => {
    if (initialData.length === 0) return []

    const keys = Object.keys(initialData[0]) as Array<keyof DataType>
    return keys.map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }))
  }, [initialData])

  const memoizedColumns = useMemo(() => columns, [columns])
  const memoizedData = useMemo(() => filteredData, [filteredData])

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
  } = useTable<DataType>(
    {
      columns: memoizedColumns,
      data: memoizedData,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
  ) as TableInstanceWithHooks<DataType>

  // const handleBarClick = (clickedData: DataType[]) => {
  //   setFilteredData(clickedData.length > 0 ? clickedData : initialData)
  // }

  return (
    <div className='table-container'>
      <table {...getTableProps()} className='table'>
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
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='pagination'>
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
      {/* <ChartContainer data={initialData} onBarClick={handleBarClick} /> */}
    </div>
  )
}

export { TableContainer }

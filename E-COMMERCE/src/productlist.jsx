import React, { useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import Select from 'react-select';

const ProductList = ({ products, onFilterChange }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: products }, useSortBy);

  const filterOptions = [
    { value: '', label: 'All' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'jewelery', label: 'Jewelery' },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
  ];

  return (
    <div>
      <Select options={filterOptions} onChange={onFilterChange} placeholder="Filter by category" />
      <table {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

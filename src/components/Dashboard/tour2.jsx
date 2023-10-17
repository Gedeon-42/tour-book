import React from 'react'
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  // Create a table instance using the useTable hook
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};



function Tour1() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        name: 'John Doe',
        age: 30,
        city: 'New York',
      },
      {
        name: 'Jane Smith',
        age: 25,
        city: 'Los Angeles',
      },
      {
        name: 'Bob Johnson',
        age: 35,
        city: 'Chicago',
      },
    ],
    []
  );

  return (
    <div>
        <h1> tour  dashboard</h1>
        <Table columns={columns} data={data} />
    </div>
  )
}

export default Tour1
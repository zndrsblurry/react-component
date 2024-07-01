import React from 'react';
import TableRow from './TableRow';

interface TableBodyProps {
  columns: { header: string; accessor: string }[];
  sortedData: { [key: string]: any }[];
}

const TableBody: React.FC<TableBodyProps> = ({ columns, sortedData }) => (
  <tbody className="text-gray-600 dark:text-gray-300">
    {sortedData.map((row, rowIndex) => (
      <TableRow key={rowIndex} row={row} columns={columns} />
    ))}
  </tbody>
);

export default TableBody;

import React from 'react';
import TableCell from './TableCell';

interface TableRowProps {
  row: { [key: string]: any };
  columns: { header: string; accessor: string }[];
}

const TableRow: React.FC<TableRowProps> = ({ row, columns }) => (
  <tr className="hover:bg-white/10 hover:backdrop-blur-md transition duration-200 ease-in-out">
    {columns.map((column) => (
      <TableCell key={column.accessor} value={row[column.accessor]} />
    ))}
  </tr>
);

export default TableRow;

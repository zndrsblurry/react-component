import React from 'react';
import TableHeaderCell from './TableHeaderCell';

interface TableHeaderRowProps {
  columns: { header: string; accessor: string }[];
  sortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
  requestSort: (key: string) => void;
}

const TableHeaderRow: React.FC<TableHeaderRowProps> = ({
  columns,
  sortConfig,
  requestSort,
}) => (
  <tr>
    {columns.map((column) => (
      <TableHeaderCell
        key={column.accessor}
        column={column}
        sortConfig={sortConfig}
        requestSort={requestSort}
      />
    ))}
  </tr>
);

export default TableHeaderRow;

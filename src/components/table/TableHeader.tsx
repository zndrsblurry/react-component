import React from 'react';
import TableHeaderRow from './TableHeaderRow';

interface TableHeaderProps {
  columns: { header: string; accessor: string }[];
  sortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
  requestSort: (key: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortConfig,
  requestSort,
}) => (
  <thead className="dark:text-gray-200 text-gray-700">
    <TableHeaderRow
      columns={columns}
      sortConfig={sortConfig}
      requestSort={requestSort}
    />
  </thead>
);

export default TableHeader;

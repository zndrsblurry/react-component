import React from 'react';
import SortIcon from '../SortIcon';

interface TableHeaderCellProps {
  column: { header: string; accessor: string };
  sortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
  requestSort: (key: string) => void;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  column,
  sortConfig,
  requestSort,
}) => {
  const getAriaSort = () => {
    if (!sortConfig) return 'none';
    return sortConfig.key === column.accessor ? sortConfig.direction : 'none';
  };

  return (
    <th
      className="py-3 px-6 border-b border-gray-200/20 dark:border-gray-700/50 text-left font-semibold tracking-wider cursor-pointer"
      onClick={() => requestSort(column.accessor)}
      aria-sort={getAriaSort()}
    >
      <div className="flex items-center">
        {column.header}
        <span className="ml-2">
          <SortIcon accessor={column.accessor} sortConfig={sortConfig} />
        </span>
      </div>
    </th>
  );
};

export default TableHeaderCell;

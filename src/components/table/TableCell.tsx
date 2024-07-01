import React from 'react';

interface TableCellProps {
  value: any;
}

const TableCell: React.FC<TableCellProps> = ({ value }) => (
  <td className="py-3 px-6 border-b border-gray-200/20 dark:border-gray-700/50 text-sm">
    {value}
  </td>
);

export default TableCell;

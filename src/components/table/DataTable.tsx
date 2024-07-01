import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import useSortableData from '../../hooks/useSortableData';

interface DataTableProps {
  columns: { header: string; accessor: string }[];
  data: { [key: string]: any }[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const { sortedData, requestSort, sortConfig } = useSortableData(data, null);

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full min-w-full rounded-lg">
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          requestSort={requestSort}
        />
        <TableBody columns={columns} sortedData={sortedData} />
      </table>
    </div>
  );
};

export default DataTable;

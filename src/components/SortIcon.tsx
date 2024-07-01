import React from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

interface SortIconProps {
  accessor: string;
  sortConfig: { key: string; direction: string } | null;
}

const SortIcon: React.FC<SortIconProps> = ({ accessor, sortConfig }) => {
  if (!sortConfig) return <FaSort />;
  if (sortConfig.key === accessor) {
    return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
  }
  return <FaSort />;
};

export default SortIcon;

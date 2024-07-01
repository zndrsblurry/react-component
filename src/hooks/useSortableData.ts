import { useState, useMemo } from 'react';

interface SortConfig {
  key: string;
  direction: 'ascending' | 'descending';
}

interface DataItem {
  [key: string]: any;
}

const useSortableData = (
  initialData: DataItem[],
  initialSortConfig: SortConfig | null = null,
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(
    initialSortConfig,
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return initialData;

    const compare = (a: DataItem, b: DataItem) => {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];

      if (keyA < keyB) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (keyA > keyB) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    };

    return [...initialData].sort(compare);
  }, [initialData, sortConfig]);

  const requestSort = (key: string) => {
    setSortConfig(prevConfig => {
      if (prevConfig?.key === key && prevConfig.direction === 'ascending') {
        return { key, direction: 'descending' };
      }
      return { key, direction: 'ascending' };
    });
  };

  return { sortedData, requestSort, sortConfig };
};

export default useSortableData;


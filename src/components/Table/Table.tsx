import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { useTableDragDrop } from '../../hooks/useTableDragDrop';
import type { Column, TableData } from '../../types/table';

interface TableProps {
  data: TableData[];
  initialColumns: Column[];
}

export function Table({ data, initialColumns }: TableProps) {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const { handleDragStart, handleDragOver, handleDrop } = useTableDragDrop(columns, setColumns);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader 
          columns={columns}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <TableBody 
          data={data}
          columns={columns}
        />
      </table>
    </div>
  );
}
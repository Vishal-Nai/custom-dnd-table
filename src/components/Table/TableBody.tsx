import React from 'react';
import type { Column, TableData } from '../../types/table';

interface TableBodyProps {
  data: TableData[];
  columns: Column[];
}

export function TableBody({ data, columns }: TableBodyProps) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-50">
          {columns.map((column) => (
            <td
              key={column.id}
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {row[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
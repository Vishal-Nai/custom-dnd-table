import React from 'react';
import type { Column } from '../../types/table';

interface TableHeaderProps {
  columns: Column[];
  onDragStart: (e: React.DragEvent<HTMLTableCellElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLTableCellElement>) => void;
  onDrop: (e: React.DragEvent<HTMLTableCellElement>, index: number) => void;
}

export function TableHeader({ columns, onDragStart, onDragOver, onDrop }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th
            key={column.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
            className="group px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider cursor-move"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-0.5 bg-gray-400 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-400 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-400"></div>
              </div>
              {column.label}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
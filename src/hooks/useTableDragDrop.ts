import { useCallback } from 'react';
import type { Column } from '../types/table';

export function useTableDragDrop(columns: Column[], setColumns: (columns: Column[]) => void) {
  const handleDragStart = useCallback((e: React.DragEvent<HTMLTableCellElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLTableCellElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLTableCellElement>, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData('text/plain'));
    
    if (dragIndex === dropIndex) return;

    const newColumns = [...columns];
    const [draggedColumn] = newColumns.splice(dragIndex, 1);
    newColumns.splice(dropIndex, 0, draggedColumn);
    
    setColumns(newColumns);
  }, [columns, setColumns]);

  return {
    handleDragStart,
    handleDragOver,
    handleDrop
  };
}
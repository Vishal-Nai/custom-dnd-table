export interface Column {
  id: string;
  key: string;
  label: string;
}

export interface TableData {
  [key: string]: string | number;
}
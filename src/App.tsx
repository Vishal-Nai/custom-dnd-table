import React from 'react';
import { Table } from './components/Table/Table';

const initialColumns = [
  { id: '1', key: 'name', label: 'Name' },
  { id: '2', key: 'email', label: 'Email' },
  { id: '3', key: 'role', label: 'Role' },
  { id: '4', key: 'department', label: 'Department' }
];

const sampleData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Developer', department: 'Engineering' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', department: 'Design' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', department: 'Product' },
  { name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Developer', department: 'Engineering' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Custom Table with Drag & Drop</h1>
        <Table 
          data={sampleData}
          initialColumns={initialColumns}
        />
      </div>
    </div>
  );
}

export default App;
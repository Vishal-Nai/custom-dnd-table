import React, { useState } from 'react';
import { Plus, Trash2, Send } from 'lucide-react';

interface FormField {
  id: string;
  value: string;
}

export default function DynamicForm() {
  const [fields, setFields] = useState<FormField[]>([
    { id: crypto.randomUUID(), value: '' }
  ]);

  const addField = () => {
    setFields([...fields, { id: crypto.randomUUID(), value: '' }]);
  };

  const removeField = (id: string) => {
    if (fields.length === 1) return; // Keep at least one field
    setFields(fields.filter(field => field.id !== id));
  };

  const handleChange = (id: string, value: string) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, value } : field
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', fields);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="flex gap-2">
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                           px-3 py-2 text-sm border"
                  placeholder="Enter value"
                />
                <button
                  type="button"
                  onClick={() => removeField(field.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  disabled={fields.length === 1}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={addField}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 
                         bg-indigo-50 rounded-md hover:bg-indigo-100 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="w-4 h-4" />
                Add Field
              </button>
              
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
                         bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
              >
                <Send className="w-4 h-4" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
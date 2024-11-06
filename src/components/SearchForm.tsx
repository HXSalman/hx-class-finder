import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchFormProps {
  onSearch: (ic: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [ic, setIc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(ic);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={ic}
          onChange={(e) => setIc(e.target.value)}
          placeholder="Enter IC Number"
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg transition-all duration-200 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </form>
  );
}
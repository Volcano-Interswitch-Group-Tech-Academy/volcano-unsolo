import { SearchBarProps } from '@/helpers/types/ui';
import React, { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';



const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2.5">
        <FaSearch className="text-gray-400" />
      </div>
    </form>
  );
};

export default SearchBar;

// src/components/admin/ActionBar.jsx
import React, { useState } from "react";
import { Plus, Search } from "lucide-react";

const ActionBar = ({
  onNewClick,
  onFilterChange,
  onSearch,
  filterOptions = [],
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-3 bg-white p-3 rounded-md shadow-sm border">
      {/* Left: New Item Button */}
      <button
        onClick={onNewClick}
        className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
      >
        <Plus size={18} />
        New Post
      </button>

      {/* Right: Filters & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Filter Dropdown */}
        {filterOptions.length > 0 && (
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            onChange={(e) => onFilterChange && onFilterChange(e.target.value)}
          >
            {filterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {/* Search Input + Button */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-3 py-2 w-40 focus:outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="bg-gray-100 hover:bg-gray-200 p-2 border-l border-gray-300"
          >
            <Search size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;

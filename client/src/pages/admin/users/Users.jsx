import React, { useState } from "react";

import UsersTable from "./UsersTable";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  // Mock user data for now
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      user_id: "USR001",
      createdAt: "2025-08-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      user_id: "USR002",
      createdAt: "2025-08-10",
    },
  ];

  const handleSearch = () => {
    console.log("Searching by:", searchBy, "value:", searchValue);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    console.log("Sort by:", e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center max-w-screen overflow-hidden rounded-md bg-gray-300">
      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-4 m-5 p-5 bg-gray-200 rounded-md">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="name">Name</option>
            <option value="date">Created At</option>
            <option value="user_id">User ID</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Search by:</label>
          <select
            value={searchBy}
            onChange={handleSearchByChange}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="name">Name</option>
            <option value="user_id">User ID</option>
            <option value="email">Email</option>
            <option value="createdAt">Created At</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Enter ${searchBy}...`}
            className="border rounded px-3 py-1 text-sm w-56"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col p-5">
        <UsersTable
          data={mockUsers}
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Users;

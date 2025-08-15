import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/admin/Pagination";

const ContentTable = ({
  data = [],
  currentPage,
  totalPages,
  onPageChange,
  onFilterChange,
}) => {
  const navigate = useNavigate();

  // Local state for filters
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("published_date");
  const [showBasicFilters, setShowBasicFilters] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, sortBy });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onFilterChange({ search, sortBy: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title, author, etc."
          value={search}
          onChange={handleSearch}
          className="px-3 py-2 border rounded-md w-60 text-sm"
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-3 py-2 border rounded-md text-sm"
        >
          <option value="published_date">Sort by Published Date</option>
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="league">Sort by League</option>
        </select>

        {/* Filters */}
        <button
          className="px-3 py-2 bg-gray-100 border rounded-md text-sm"
          onClick={() => setShowBasicFilters(true)}
        >
          Filters
        </button>
        <button
          className="px-3 py-2 bg-gray-100 border rounded-md text-sm"
          onClick={() => setShowAdvancedFilters(true)}
        >
          Advanced Filters
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-auto border border-gray-300 rounded-lg bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">Title</th>
              <th className="px-3 py-2 border">League</th>
              <th className="px-3 py-2 border">Countries</th>
              <th className="px-3 py-2 border">Category</th>
              <th className="px-3 py-2 border">Teams</th>
              <th className="px-3 py-2 border">Stadium</th>
              <th className="px-3 py-2 border">Location</th>
              <th className="px-3 py-2 border">Tags</th>
              <th className="px-3 py-2 border">Published Date</th>
              <th className="px-3 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{item.title}</td>
                  <td className="px-3 py-2 border">
                    {item.leagues?.join(", ") || "-"}
                  </td>
                  <td className="px-3 py-2 border">
                    {item.countries?.join(", ") || "-"}
                  </td>
                  <td className="px-3 py-2 border">{item.category}</td>
                  <td className="px-3 py-2 border">
                    {item.teams?.join(", ") || "-"}
                  </td>
                  <td className="px-3 py-2 border">{item.stadium || "-"}</td>
                  <td className="px-3 py-2 border">{item.location || "-"}</td>
                  <td className="px-3 py-2 border">
                    {item.tags?.join(", ") || "-"}
                  </td>
                  <td className="px-3 py-2 border">
                    {item.published_date || "-"}
                  </td>
                  <td className="px-3 py-2 border">
                    <button
                      className="px-2 py-1 text-xs bg-blue-500 text-white rounded mr-2"
                      onClick={() =>
                        navigate(
                          `/admin/content-management/edit/${
                            item.slug || "dummy123"
                          }`
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                      onClick={() => ""} // TODO: Delete handler
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4 border">
                  No content found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}

      {/* TODO: Basic Filters Modal */}
      {showBasicFilters && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Example: Category */}
            <label className="block mb-2 text-sm">Category</label>
            <select multiple className="w-full border px-2 py-1 rounded mb-3">
              <option>Team News</option>
              <option>Transfer News</option>
              <option>Injury Update</option>
            </select>
            {/* Add other filters here */}

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowBasicFilters(false)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                Close
              </button>
              <button
                onClick={() => setShowBasicFilters(false)} // TODO: Apply filters
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TODO: Advanced Filters Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Advanced Filters</h2>

            <label className="block mb-2 text-sm">Published Date</label>
            <input
              type="date"
              className="w-full border px-2 py-1 rounded mb-3"
            />

            <label className="block mb-2 text-sm">Slug</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded mb-3"
            />

            <label className="block mb-2 text-sm">Blog ID</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded mb-3"
            />

            <label className="block mb-2 text-sm">Sources</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded mb-3"
            />

            <label className="block mb-2 text-sm">Content Hash</label>
            <input
              type="text"
              className="w-full border px-2 py-1 rounded mb-3"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                Close
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)} // TODO: Apply advanced filters
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentTable;

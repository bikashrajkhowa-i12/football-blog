// ContentTable.jsx
import React from "react";

const ContentTable = ({ data = [], currentPage, totalPages, onPageChange }) => {
  return (
    <div className="overflow-x-auto w-auto border border-gray-300 rounded-lg bg-white">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border border-gray-300">Title</th>
            <th className="px-3 py-2 border border-gray-300">League</th>
            <th className="px-3 py-2 border border-gray-300">Countries</th>
            <th className="px-3 py-2 border border-gray-300">Category</th>
            <th className="px-3 py-2 border border-gray-300">Teams</th>
            <th className="px-3 py-2 border border-gray-300">Stadium</th>
            <th className="px-3 py-2 border border-gray-300">Location</th>
            <th className="px-3 py-2 border border-gray-300">Tags</th>
            <th className="px-3 py-2 border border-gray-300">Published Date</th>
            <th className="px-3 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border border-gray-300">
                  {item.title}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.leagues?.join(", ") || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.countries?.join(", ") || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.category}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.teams?.join(", ") || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.stadium || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.location || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.tags?.join(", ") || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  {item.published_date || "-"}
                </td>
                <td className="px-3 py-2 border border-gray-300">
                  <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded mr-2">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-xs bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                className="text-center py-4 border border-gray-300"
              >
                No content found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 p-3">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContentTable;

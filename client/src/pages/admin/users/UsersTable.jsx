import React from "react";

import Pagination from "../../../components/admin/Pagination";

const UsersTable = ({ data = [], currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto w-auto border border-gray-300 rounded-lg bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-white bg-gray-800">
            <tr>
              <th className="px-3 py-2 border border-gray-300">Title</th>
              <th className="px-3 py-2 border border-gray-300">League</th>
              <th className="px-3 py-2 border border-gray-300">Countries</th>
              <th className="px-3 py-2 border border-gray-300">Category</th>
              <th className="px-3 py-2 border border-gray-300">Teams</th>
              <th className="px-3 py-2 border border-gray-300">Stadium</th>
              <th className="px-3 py-2 border border-gray-300">Location</th>
              <th className="px-3 py-2 border border-gray-300">Tags</th>
              <th className="px-3 py-2 border border-gray-300">
                Published Date
              </th>
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
                    <button
                      className="px-2 py-1 text-xs bg-yellow-500 hover:bg-yellow-600 text-black rounded mr-2"
                      onClick={() => ""}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                      onClick={() => ""} // onClick show delete modal
                    >
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
      </div>

      {/* Pagination moved inside */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default UsersTable;

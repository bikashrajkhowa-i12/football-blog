import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ChartPie } from "lucide-react";

import ContentTable from "./ContentTable";

const ContentManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = 779; // count from api
  // Mock data for now
  const mockData = [
    {
      id: 1,
      title: "First Blog",
      category: "Sports",
      author: "John Doe",
      date: "2025-08-12",
    },
    {
      id: 2,
      title: "Second Blog",
      category: "Football",
      author: "Jane Smith",
      date: "2025-08-11",
    },
  ];

  return (
    <div className="flex flex-col justify-center max-w-screen overflow-hidden rounded-md bg-gray-300">
      <div className="flex p-5">
        <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-3 bg-white p-3 rounded-md shadow-sm border">
          {/* Left: New Item Button */}
          <div className="flex gap-4">
            <button
              onNewClick={() => navigate(`/admin/content-management/new`)}
              className="flex items-center gap-2 px-4 py-2 bg-green-800 hover:bg-green-900 text-white rounded-md"
            >
              <Plus size={18} />
              New Post
            </button>

            <button
              onClick={() => navigate("/admin/content-management/draft-blogs")}
              className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-md"
            >
              <ChartPie size={18} />
              Drafts
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <h1 className="text-2xl font-bold ml-2 mb-6 text-gray-800">
          Blogs{" "}
          <i className="font-thin text-sm">({totalBlogs} results matched)</i>
        </h1>
        <ContentTable
          data={mockData}
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ContentManagement;

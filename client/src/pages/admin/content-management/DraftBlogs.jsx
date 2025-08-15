import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ContentTable from "./ContentTable";

const DraftBlogs = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Temporary mock data — replace with API call later
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
    <div className="flex flex-col max-w-screen min-h-screen rounded-md bg-gray-100">
      {/* Header */}
      <header className="flex items-center gap-3 p-1 md:mt-6 border-b border-gray-300 bg-gray-800 text-white rounded-tl-xl rounded-tr-xl">
        <ArrowLeft
          size={26}
          onClick={() => navigate("/admin/content-management")}
          className="hover:cursor-pointer"
        />
        <h1 className="text-2xl font-bold">Drafts</h1>
      </header>

      {/* Table */}
      <main className="flex flex-col flex-1 p-1 md:p-5">
        <ContentTable
          data={mockData}
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default DraftBlogs;

import React, { useState } from "react";
import ActionBar from "../../components/admin/content-management/ActionBar";
import ContentTable from "../../components/admin/content-management/ContentTable";
import Pagination from "../../components/admin/content-management/Pagination";
import { useNavigate } from "react-router-dom";

const ContentManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

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
        <ActionBar
          onNewClick={() => navigate(`/admin/content-management/new`)}
          onFilterChange={(val) => console.log("Filter changed:", val)}
          onSearch={(val) => console.log("Searching:", val)}
          filterOptions={[
            { label: "Blog Title", value: "title" },
            { label: "Category", value: "category" },
            { label: "Blog Id", value: "blog_id" },
          ]}
        />
      </div>

      <div className="flex flex-col p-5">
        <ContentTable data={mockData} />
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ContentManagement;

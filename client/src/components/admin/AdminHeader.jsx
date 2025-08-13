import React from "react";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getTitleByPath } from "../../pages/admin/helper";

const AdminHeader = ({ openDrawer }) => {
  const location = useLocation();
  const title = getTitleByPath(location.pathname);

  return (
    <div className="flex justify-between items-center p-4 border-b bg-gray-100 shadow-sm rounded-md mb-2">
      <div className="flex gap-2 items-center">
        {/* Mobile Hamburger*/}
        <button
          onClick={openDrawer}
          className="md:hidden p-1 text-gray-800 bg-gray-300 rounded-md"
          aria-label="Open sidebar"
        >
          <Menu size={28} />
        </button>
        <div className="flex flex-col">
          <h1 className="text-2xl text-gray-700 font-bold">{title}</h1>
          <p className="text-sm text-gray-500">Overview of recent activity</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
        <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
      </div>
    </div>
  );
};

export default AdminHeader;

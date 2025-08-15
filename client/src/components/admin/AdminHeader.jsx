import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getTitleByPath } from "../../pages/admin/helper";

const AdminHeader = ({ openDrawer }) => {
  const location = useLocation();
  const title = getTitleByPath(location.pathname);

  return (
    <header className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm">
      {/* Left: Title + Drawer */}
      <div className="flex gap-3 items-center">
        {/* Mobile Hamburger */}
        <button
          onClick={openDrawer}
          className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu size={22} className="text-gray-700" />
        </button>

        {/* Page Title */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <p className="text-xs text-gray-500">
            Stay updated with latest activity
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Search"
        >
          <Search size={20} className="text-gray-600" />
        </button>
        <button
          className="relative p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;

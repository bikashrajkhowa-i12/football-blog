import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

import { useAuth } from "../../context/auth/AuthContext";
import LiveDateTime from "../../components/LiveDateTime";

const AdminSidebar = ({ closeDrawer = false }) => {
  const { user, logout } = useAuth();

  const links = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/content-management", label: "Content Management" },
    { to: "/admin/users", label: "Users" },
    { to: "/admin/settings", label: "Settings" },
    { to: "/admin/profile", label: "Profile" },
  ];

  const handleLogout = () => {
    if (logout) logout();
  };

  return (
    <aside className="flex flex-col h-full p-4 bg-white rounded-md shadow-lg">
      {/* Header */}
      <div className="p-4 rounded-md shadow-md mb-4 space-y-6">
        <h1 className="text-2xl font-extrabold text-gray-800">Manage App</h1>
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p>Email: {user?.email || null}</p>
          <p>Role: {user?.role || null}</p>
          <p>{<LiveDateTime />}</p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-2 font-medium text-gray-700 overflow-y-auto flex-1">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeDrawer}
            className={({ isActive }) =>
              `w-full rounded-md px-4 py-2 transition-colors duration-200 border 
              ${
                isActive
                  ? "bg-gray-800 text-white border-gray-800 font-semibold shadow-md"
                  : "border-gray-300 hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      {/* Logout Button pinned to bottom */}
      <span
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-4 bg-white-600 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-md cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </span>
    </aside>
  );
};

export default AdminSidebar;

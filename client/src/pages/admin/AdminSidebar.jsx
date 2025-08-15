import { LogOut } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = ({ closeDrawer = false }) => {
  const navigate = useNavigate();

  // TODO: Replace with redux user
  const user = {
    email: "dummyadmin@123.com",
    role: "admin",
    isLoggedIn: true,
  };

  const links = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/content-management", label: "Content Management" },
    { to: "/admin/users", label: "Users" },
    { to: "/admin/settings", label: "Settings" },
    { to: "/admin/profile", label: "Profile" },
  ];

  const handleLogout = () => {
    // TODO: Hook into redux / auth context to clear session
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <aside className="flex flex-col h-full p-4 bg-white rounded-md shadow-lg">
      {/* Header */}
      <div className="p-4 rounded-md shadow-md mb-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Manage App</h1>
        <div className="mt-2 text-sm text-gray-600">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
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
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-4 bg-white-600 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-md"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;

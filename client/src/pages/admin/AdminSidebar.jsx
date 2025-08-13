import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routeTitles } from "./helper";

const AdminSidebar = ({ closeDrawer = false }) => {
  //TODO: Read user from redux
  const user = {
    email: "dummyadmin@123.com",
    role: "admin",
    isLoggedIn: true,
  };

  const location = useLocation();
  const links = Object.entries(routeTitles).map(([to, label]) => ({
    to,
    label,
  }));

  return (
    <div className="flex flex-col gap-5 h-full overflow-hidden shadow-lg border border-white rounded-md p-4">
      <div className="flex flex-col gap-5 items-start p-4 min-h-[50px] shadow-md rounded-md">
        <h1 className="font-extrabold text-4xl text-gray-800">Manage App</h1>
        <div className="flex flex-col justify-start py-2">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>
      <div className="flex flex-col items-start py-2 font-bold text-gray-700 max-h-[300px] overflow-y-auto">
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`relative w-full rounded-md p-2 pl-4 transition-all duration-200 border border-gray-400 flex items-center
              ${
                isActive
                  ? "bg-white bg-opacity-100 text-black"
                  : "bg-gradient-to-t from-gray-300 to-gray-100 text-gray-700 hover:text-black opacity-80"
              }`}
              onClick={closeDrawer}
            >
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-500 rounded-l-sm transition-all duration-200"></span>
              )}
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;

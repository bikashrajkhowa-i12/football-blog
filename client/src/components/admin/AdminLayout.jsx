import React, { useState } from "react";
import AdminSidebarWrapper from "./AdminSidebarWrapper";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar / Drawer */}
      <AdminSidebarWrapper
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[350px] max-w-screen-xl w-full mx-auto">
        <AdminHeader openDrawer={() => setIsDrawerOpen(true)} />

        <main className="flex-1 p-4 bg-white rounded-lg shadow-sm overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

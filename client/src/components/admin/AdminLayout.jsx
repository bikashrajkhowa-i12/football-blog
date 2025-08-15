import React, { useState } from "react";
import AdminSidebarWrapper from "./AdminSidebarWrapper";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Sidebar / Drawer */}
      <AdminSidebarWrapper
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* Main Content Area */}
      <div className="flex flex-col md:ml-[350px] max-w-screen-xl w-full mx-auto ">
        <AdminHeader openDrawer={() => setIsDrawerOpen(true)} />

        <section className="flex-1 p-4 bg-white rounded-lg shadow-sm overflow-y-auto">
          {children}
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;

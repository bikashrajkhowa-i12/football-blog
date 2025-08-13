import React, { useState } from "react";
import AdminSidebarWrapper from "./AdminSidebarWrapper";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex justify-center max-w-screen min-h-screen bg-gray-300">
      {/* Sidebar + Drawer */}
      <AdminSidebarWrapper
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* Main Content */}
      <section className="block max-w-screen-xl mx-auto w-full h-full p-2 md:ml-[350px]">
        <AdminHeader openDrawer={() => setIsDrawerOpen(true)} />
        <div className="min-h-screen p-2 bg-gray-100 rounded-md">
          {children}
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;

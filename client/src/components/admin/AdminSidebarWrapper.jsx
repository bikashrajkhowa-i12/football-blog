import React from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";
import Drawer from "../Drawer";

const AdminSidebarWrapper = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="fixed left-0 hidden md:block w-[350px] p-2">
        <AdminSidebar />
      </aside>

      {/* Sidebar drawer for Mobile */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        widthClass="w-3/4 max-w-xs"
        position="left"
        viewScreen="hidden"
      >
        <AdminSidebar closeDrawer={() => setIsDrawerOpen(false)} />
      </Drawer>
    </>
  );
};

export default AdminSidebarWrapper;

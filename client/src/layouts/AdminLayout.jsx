import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex justify-center md:px-4 gap-4">
      <aside className="hidden md:flex w-[200px] bg-gray-600">Left fixed</aside>

      <section className="w-full max-w-7xl bg-gray-400">
        {children} Main display comp
      </section>
    </div>
  );
};

export default AdminLayout;

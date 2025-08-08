import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center px-4 gap-4">
      {/* Left aside (visible on lg and up) */}
      <aside className="hidden lg:block w-[100px]">
        {/* Future sidebar content */}
      </aside>

      {/* Main content */}
      <section className="w-full max-w-7xl">{children}</section>

      {/* Right aside (visible on lg and up) */}
      <aside className="hidden lg:block w-[100px]">
        {/* Future sidebar content */}
      </aside>
    </div>
  );
};

export default Layout;

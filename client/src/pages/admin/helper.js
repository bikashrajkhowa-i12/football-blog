// Route-to-title mapping
export const routeTitles = {
  "/admin/dashboard": "Dashboard",
  "/admin/users": "Users",
  "/admin/content-management": "Content Management",
  "/admin/settings": "Settings",
  "/admin/profile": "Profile",
};

// Helper to get title by path
export const getTitleByPath = (pathname) => {
  return routeTitles[pathname] || "404 Page Not Found";
};

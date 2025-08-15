// Route-to-title mapping
const routeTitles = [
  { path: "/admin/dashboard", title: "Dashboard" },
  { path: "/admin/users", title: "Users" },
  { path: "/admin/content-management", title: "Content Management" },
  { path: "/admin/content-management/new", title: "Content Management" },
  {
    path: "/admin/content-management/draft-blogs",
    title: "Content Management",
  },
  {
    path: /^\/admin\/content-management\/edit\/[^/]+$/,
    title: "Content Management",
  },
  { path: "/admin/settings", title: "Settings" },
  { path: "/admin/profile", title: "Profile" },
];

// Helper to get title by path
export const getTitleByPath = (pathname) => {
  for (const route of routeTitles) {
    if (typeof route.path === "string" && route.path === pathname) {
      return route.title;
    }
    if (route.path instanceof RegExp && route.path.test(pathname)) {
      return route.title;
    }
  }
  return "404 Page Not Found";
};

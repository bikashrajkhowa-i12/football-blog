import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import ContentManagement from "../pages/admin/content-management/ContentManagement";
import Users from "../pages/admin/users/Users";
import Settings from "../pages/admin/Settings";
import ProfilePage from "../pages/profile/ProfilePage";
import BlogEditorPage from "../pages/admin/content-management/BlogEditorPage";
import DraftBlogs from "../pages/admin/content-management/DraftBlogs";

const AdminRoutes = () => {
  const baseRoute = "/admin";
  const redirectToBase = <Navigate to={`${baseRoute}/dashboard`} replace />;

  const contentRoute = `${baseRoute}/content-management`;

  return (
    <Routes>
      {/**Landing page */}
      <Route path={`${baseRoute}/dashboard`} element={<Dashboard />} />
      <Route path="/" element={redirectToBase} />
      <Route path="/admin" element={redirectToBase} />

      {/**Content-Management Routes */}
      <Route path={contentRoute} element={<ContentManagement />} />
      <Route path={`${contentRoute}/new`} element={<BlogEditorPage />} />
      <Route path={`${contentRoute}/draft-blogs`} element={<DraftBlogs />} />
      <Route path={`${contentRoute}/edit/:id`} element={<BlogEditorPage />} />

      {/**Users */}
      <Route path={`${baseRoute}/users`} element={<Users />} />

      {/**Settings */}
      <Route path={`${baseRoute}/settings`} element={<Settings />} />

      {/**Profile */}
      <Route path={`${baseRoute}/profile`} element={<ProfilePage />} />

      {/**Admin Page not found */}
      <Route path="*" element={<p>404 — Admin Page Not Found</p>} />
    </Routes>
  );
};

export default AdminRoutes;

import { Navigate, Route, Routes } from "react-router-dom";

import AdminLandingPage from "../pages/admin/AdminLandingPage";
import ContentManagement from "../pages/admin/ContentManagement";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import ProfilePage from "../pages/profile/ProfilePage";
import BlogEditorPage from "../pages/admin/BlogEditorPage";

const AdminRoutes = () => {
  const baseRoute = "/admin";
  const redirectToBase = <Navigate to={`${baseRoute}/dashboard`} replace />;

  const contentRoute = `${baseRoute}/content-management`;

  return (
    <Routes>
      <Route path="/" element={redirectToBase} />
      <Route path="/admin" element={redirectToBase} />
      <Route path={`${baseRoute}/dashboard`} element={<AdminLandingPage />} />
      <Route path={`${contentRoute}/new`} element={<BlogEditorPage />} />
      <Route path={`${contentRoute}/edit/:id`} element={<BlogEditorPage />} />
      <Route path={contentRoute} element={<ContentManagement />} />
      <Route path={`${baseRoute}/users`} element={<Users />} />
      <Route path={`${baseRoute}/settings`} element={<Settings />} />
      <Route path={`${baseRoute}/profile`} element={<ProfilePage />} />
      <Route path="*" element={<p>404 — Admin Page Not Found</p>} />
    </Routes>
  );
};

export default AdminRoutes;

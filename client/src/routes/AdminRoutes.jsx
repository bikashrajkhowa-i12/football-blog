import { Navigate, Route, Routes } from "react-router-dom";

import AdminLandingPage from "../pages/admin/AdminLandingPage";
import Dashboard from "../pages/admin/pages/Dashboard";
import ContentManagement from "../pages/admin/pages/ContentManagement";
import Users from "../pages/admin/pages/Users";
import Settings from "../pages/admin/pages/Settings";

const AdminRoutes = () => {
  const baseRoute = "/admin";
  return (
    <Routes>
      <Route path="/" element={<Navigate to={baseRoute} replace />} />
      <Route path={`${baseRoute}`} element={<AdminLandingPage />} />
      <Route path={`${baseRoute}/dashboard`} element={<Dashboard />} />
      <Route
        path={`${baseRoute}/content-management`}
        element={<ContentManagement />}
      />
      <Route path={`${baseRoute}/users`} element={<Users />} />
      <Route path={`${baseRoute}/settings`} element={<Settings />} />
      <Route path="*" element={<p>404 — Admin Page Not Found</p>} />
    </Routes>
  );
};

export default AdminRoutes;

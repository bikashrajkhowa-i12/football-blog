import { Navigate, Route, Routes } from "react-router-dom";

import AdminLandingPage from "../pages/admin/AdminLandingPage";
import ContentManagement from "../pages/admin/ContentManagement";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import ProfilePage from "../pages/profile/ProfilePage";

const AdminRoutes = () => {
  const baseRoute = "/admin";
  const redirectToBase = <Navigate to={`${baseRoute}/dashboard`} replace />;
  return (
    <Routes>
      <Route path="/" element={redirectToBase} />
      <Route path="/admin" element={redirectToBase} />
      <Route path={`${baseRoute}/dashboard`} element={<AdminLandingPage />} />
      <Route
        path={`${baseRoute}/content-management`}
        element={<ContentManagement />}
      />
      <Route path={`${baseRoute}/users`} element={<Users />} />
      <Route path={`${baseRoute}/settings`} element={<Settings />} />
      <Route path={`${baseRoute}/profile`} element={<ProfilePage />} />
      <Route path="*" element={<p>404 — Admin Page Not Found</p>} />
    </Routes>
  );
};

export default AdminRoutes;

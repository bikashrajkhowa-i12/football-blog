import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/profile/ProfilePage";
import BlogPost from "../pages/BlogPost";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<p>404 — Page Not Found</p>} />
    </Routes>
  );
};

export default PublicRoutes;

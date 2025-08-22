import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Home";
import ProfilePage from "../pages/profile/ProfilePage";
import BlogPost from "../pages/BlogPost";
import Latest from "../pages/LatestPage";
import Fixtures from "../pages/Fixtures";
import Teams from "../pages/Teams";
import Trending from "../pages/Trending";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/latest" element={<Latest></Latest>} />
      <Route path="/fixtures" element={<Fixtures></Fixtures>} />
      <Route path="/trending" element={<Trending></Trending>} />
      <Route path="/:category" element={<></>} />
      <Route path="/teams" element={<Teams></Teams>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<p>404 — Page Not Found</p>} />
    </Routes>
  );
};

export default PublicRoutes;

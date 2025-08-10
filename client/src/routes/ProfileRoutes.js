import { Route, Routes } from "react-router-dom";
import ProfileLayout from "../pages/profile/ProfileLayout";
import ProfileLandingPage from "../pages/profile/ProfileLandingPage";

const ProfileRoutes = () => {
  return (
    <ProfileLayout>
      <Routes>
        <Route path="/profile" element={<ProfileLandingPage />} />
      </Routes>
    </ProfileLayout>
  );
};

export default ProfileRoutes;

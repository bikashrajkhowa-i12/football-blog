import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[400px] justify-center items-center">
      <div className="prose text-center">
        <h2>Y’all caught us mid-build 🔨. Give us a minute 😄</h2>
        <Button onClick={() => navigate("/home")}>Back</Button>
      </div>
    </div>
  );
};

export default ProfilePage;

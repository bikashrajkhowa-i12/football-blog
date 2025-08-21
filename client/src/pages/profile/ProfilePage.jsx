import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";

import { useAuth } from "../../context/auth/AuthContext";

import Button from "../../components/Button";
import FormBuilder from "../../components/FormBuilder";

const ProfilePage = () => {
  const {
    avatar_url = "",
    name = "",
    username = "",
    email = "",
  } = useAuth().user;

  const [personalInfo, setPersonalInfo] = useState({
    name: name || "",
    username: username || "",
    bio: "",
  });

  const [accountInfo, setAccountInfo] = useState({
    email: email || "",
    password: "************",
    new_email: "",
    new_password: "",
    confirm_new_password: "",
  });

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 py-12 px-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-5 p-4 rounded-2xl shadow-lg bg-gradient-to-b from-gray-50 to-white">
        {/* Avatar */}
        <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          {avatar_url ? (
            <img
              src={avatar_url}
              className="w-full h-full object-cover"
              alt="Profile Avatar"
            />
          ) : (
            <CircleUserRound size={26} />
          )}
        </div>
        <div className="text-sm text-gray-500 cursor-not-allowed opacity-70">
          Edit Profile Picture ✏️
        </div>

        <Button text="Update Profile" variant="success" className="px-6 py-2" />
      </div>

      {/* Personal Info */}
      <div className="rounded-2xl shadow-lg p-0 md:p-8 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
          <span className="text-green-600">👤</span> Personal Information
        </h1>
        <FormBuilder
          fields={[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Enter your full name",
              value: personalInfo.name,
              controlled: true,
              onChange: (e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value }),
            },
            {
              label: "Username",
              name: "username",
              type: "text",
              placeholder: "Enter your username",
              value: personalInfo.username,
              controlled: true,
              onChange: (e) =>
                setPersonalInfo({ ...personalInfo, username: e.target.value }),
            },
            {
              label: "Bio",
              name: "bio",
              type: "textarea",
              placeholder: "Write a short introduction...",
              value: personalInfo.bio,
              controlled: true,
              onChange: (e) =>
                setPersonalInfo({ ...personalInfo, bio: e.target.value }),
            },
          ]}
          buttons={[
            {
              label: "Reset",
              type: "button",
              variant: "secondary",
              className: "px-4 py-2",
            },
            {
              label: "Save",
              type: "submit",
              variant: "success",
              className: "px-4 py-2",
            },
          ]}
        />
      </div>

      {/* Account Info */}
      <div className="rounded-2xl shadow-lg p-0 md:p-8 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
          <span className="text-blue-600">⚙️</span> Account Settings
        </h1>
        <FormBuilder
          fields={[
            {
              label: "Current Email",
              name: "email",
              type: "email",
              disabled: true,
              value: accountInfo.email,
              controlled: true,
              onChange: (e) =>
                setAccountInfo({ ...accountInfo, email: e.target.value }),
            },
            {
              label: "Current Password",
              name: "password",
              type: "password",
              disabled: true,
              value: accountInfo.password,
              controlled: true,
              onChange: (e) =>
                setAccountInfo({ ...accountInfo, password: e.target.value }),
            },
            {
              label: "Change Email",
              name: "new_email",
              type: "email",
              placeholder: "Enter your new email",
              value: accountInfo.new_email,
              controlled: true,
              onChange: (e) =>
                setAccountInfo({ ...accountInfo, new_email: e.target.value }),
            },
            {
              label: "New Password",
              name: "new_password",
              type: "password",
              placeholder: "Enter a new password",
              value: accountInfo.new_password,
              controlled: true,
              onChange: (e) =>
                setAccountInfo({
                  ...accountInfo,
                  new_password: e.target.value,
                }),
            },
            {
              label: "Confirm New Password",
              name: "confirm_new_password",
              type: "password",
              placeholder: "Confirm new password",
              value: accountInfo.confirm_new_password,
              controlled: true,
              onChange: (e) =>
                setAccountInfo({
                  ...accountInfo,
                  confirm_new_password: e.target.value,
                }),
            },
          ]}
          buttons={[
            {
              label: "Reset",
              type: "button",
              variant: "secondary",
              className: "px-4 py-2",
            },
            {
              label: "Save",
              type: "submit",
              variant: "success",
              className: "px-4 py-2",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProfilePage;

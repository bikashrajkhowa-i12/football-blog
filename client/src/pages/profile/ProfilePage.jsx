import React from "react";
import Button from "../../components/Button";
import FormBuilder from "../../components/FormBuilder";
import defaultAvatar from "./user-profile-logo.png";

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 py-12 px-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-5 p-4 rounded-2xl shadow-lg bg-gradient-to-b from-gray-50 to-white">
        {/* Avatar */}
        <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img
            src={defaultAvatar}
            className="w-full h-full object-cover"
            alt="Profile Avatar"
          />
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
            },
            {
              label: "Nickname",
              name: "nickname",
              type: "text",
              placeholder: "Enter your nickname",
            },
            {
              label: "Bio",
              name: "bio",
              type: "textarea",
              placeholder: "Write a short introduction...",
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
              name: "current_email",
              type: "email",
              defaultValue: "dummy@123.gmail.com", // TODO: fetch from API
              disabled: true,
            },
            {
              label: "Current Password",
              name: "current_password",
              type: "password",
              defaultValue: "********",
              disabled: true,
            },
            {
              label: "Change Email",
              name: "new_email",
              type: "email",
              placeholder: "Enter your new email",
            },
            {
              label: "New Password",
              name: "new_password",
              type: "password",
              placeholder: "Enter a new password",
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

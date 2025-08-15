import React from "react";
import Button from "../../components/Button";
import FormBuilder from "../../components/FormBuilder";
import defaultAvatar from "./user-profile-logo.png";

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 py-10 px-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-md">
        {/* Avatar */}
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-gray-200 shadow-sm">
          <img
            src={defaultAvatar}
            className="w-full h-full object-cover"
            alt="Profile Avatar"
          />
        </div>
        <div className="text-sm text-gray-500 cursor-not-allowed opacity-60">
          Edit Profile Picture ✏️
        </div>
        <Button text="Update Profile" variant="success" />
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Personal Information
        </h1>
        <FormBuilder
          fields={[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
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
              placeholder: "Write something about yourself...",
            },
          ]}
          buttons={[
            { label: "Reset", type: "button", variant: "secondary" },
            { label: "Save", type: "submit", variant: "success" },
          ]}
        />
      </div>

      {/* Account Info */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
          Account Settings
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
            { label: "Reset", type: "button", variant: "secondary" },
            { label: "Save", type: "submit", variant: "success" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProfilePage;

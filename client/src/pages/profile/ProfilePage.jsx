import React from "react";
import Button from "../../components/Button";

import FormBuilder from "../../components/FormBuilder";
import defaultAvatar from "./user-profile-logo.png";

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 py-10 px-8">
      {/* Avatar */}
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
          <img
            src={defaultAvatar}
            className="w-full h-full object-cover"
            alt="Default Profile Avatar"
          />
        </div>
        <div className="cursor-not-allowed opacity-50 pb-8">
          Edit Profile Picture ✏️
        </div>
        <Button text="Update" variant="success" />
      </div>

      {/* Personal Info */}
      <div className="flex flex-col w-full max-w-xl mx-auto gap-8">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Personal info</h1>
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
              placeholder: "Enter your nick-name",
            },
            {
              label: "Bio",
              name: "bio",
              type: "textarea",
              placeholder: "Enter your bio",
            },
          ]}
          buttons={[
            {
              label: "Reset",
              type: "button",
              variant: "secondary",
            },
            {
              label: "Save",
              type: "submit",
              variant: "success",
            },
          ]}
        />
      </div>

      {/* Account Info */}
      <div className="flex flex-col w-full max-w-xl mx-auto gap-8">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Account info</h1>
        <FormBuilder
          fields={[
            {
              label: "Current Email",
              name: "current_email",
              type: "email",
              defaultValue: "dummy@123.gmail.com", //TODO: take it from backend api
              disabled: true,
            },
            {
              label: "Current Password",
              name: "current_password",
              type: "password",
              defaultValue: "dummy@123.gmail.com", //TODO: take it from backend api
              disabled: true,
            },
            {
              label: "Change Email",
              name: "new_email",
              type: "email",
              placeholder: "Enter your new email",
            },
            {
              label: "New Email Password",
              name: "new_password",
              type: "password",
              placeholder: "Enter your new email's password",
            },
          ]}
          buttons={[
            {
              label: "Reset",
              type: "button",
              variant: "secondary",
            },
            {
              label: "Save",
              type: "submit",
              variant: "success",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProfilePage;

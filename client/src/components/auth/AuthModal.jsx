import React from "react";
import Modal from "../Modal";
import LoginForm from "./LoginForm";
import { APP_CONFIG } from "../../utils/config";
import Button from "../Button";

const AuthModal = (props) => {
  const { isOpen, onClose } = props || {};
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Login to ${APP_CONFIG.app_name}`}
    >
      <div className="flex flex-col w-full gap-6">
        <LoginForm />
        <p className="w-full text-center text-gray-600">Or</p>
        <Button
          text={"Login with Google"}
          name="google"
          onClick={() => ""}
          className="w-full bg-white opacity-80 hover:bg-gray-300 active:bg-gray-300 rounded-xl text-md"
        />
      </div>
    </Modal>
  );
};

export default AuthModal;

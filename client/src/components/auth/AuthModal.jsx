import React from "react";
import Modal from "../Modal";
import LoginForm from "./LoginForm";
import { APP_CONFIG } from "../../utils/config";

const AuthModal = (props) => {
  const { isOpen, onClose } = props || {};
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Login to ${APP_CONFIG.app_name}`}
    >
      <LoginForm />
    </Modal>
  );
};

export default AuthModal;

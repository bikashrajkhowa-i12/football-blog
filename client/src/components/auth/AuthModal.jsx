import { useEffect, useState } from "react";

import Modal from "../Modal";
import { APP_CONFIG } from "../../utils/config";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

const AuthModal = (props) => {
  const { isOpen, onClose } = props || {};
  const [authView, setAuthView] = useState("login"); // flows: "login", "signup", "forgot_password"
  const onSwitchView = (view) => setAuthView(view);
  const config = APP_CONFIG.auth[authView] || {};

  useEffect(() => {
    if (isOpen) onSwitchView("login"); // always start with login.
  }, [isOpen]);

  const COMPONENTS = {
    login: Login,
    signup: Signup,
    forgot_password: ForgotPassword,
  };
  const DisplayComp = COMPONENTS[authView];

  const displayPrompt = () => {
    return (
      config.prompt && (
        <p className="text-sm text-gray-600 mb-4 text-center">
          {config.prompt}
        </p>
      )
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={config?.title}>
      {displayPrompt()}
      <DisplayComp authView={authView} onSwitchView={onSwitchView} />
    </Modal>
  );
};

export default AuthModal;

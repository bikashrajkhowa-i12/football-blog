import { useState } from "react";
import { isEmpty } from "lodash";

import callApi from "../../api/callApi";
import { useLoader } from "../../context/LoaderContext";
import { useToast } from "../../context/ToastContext";

import Divider from "../Divider";
import FormBuilder from "../FormBuilder";
import Google from "./Google";
import Alert from "../Alert";
import { useAuth } from "../../context/auth/AuthContext";

const Signup = (props) => {
  const { login } = useAuth();
  const { onSwitchView, onClose = () => "" } = props || {};
  const [error, setError] = useState(null);
  const { startLoading, stopLoading } = useLoader();
  const { addToast } = useToast();

  const toast = () =>
    addToast({
      type: "success",
      message: `🎉 Signup successful! Welcome aboard!`,
    });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const onSubmit = async (data) => {
    if (isEmpty(data)) return;

    setError(null);
    startLoading({ type: "global", prompt: "Setting up your account..." });
    try {
      const response = await callApi({
        method: "POST",
        url: "/auth/signup",
        data: data,
      });

      login(response?.data?.user, response?.data?.accessToken);
      toast();
      onClose();
    } catch (error) {
      setError(error.message || "Failed to sign-up");
    } finally {
      stopLoading({ type: "global" });
    }
  };

  const fields = [
    {
      type: "email",
      name: "email",
      required: true,
      placeholder: "E-mail",
      value: formData.email,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, email: e.target.value });
      },
    },
    {
      type: "password",
      name: "password",
      required: true,
      placeholder: "Create Password",
      value: formData.password,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, password: e.target.value });
      },
    },
    {
      type: "password",
      name: "confirm_password",
      required: true,
      placeholder: "Confirm Password",
      value: formData.confirm_password,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, confirm_password: e.target.value });
      },
    },
  ];

  const buttons = [
    {
      label: "Sign up",
      type: "submit",
      variant: "success",
      className: "w-full py-2",
    },
  ];

  const loginLink = () => {
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <p className="text-base text-gray-600">Already have an account?</p>
        <span
          className="text-base font-semibold cursor-pointer text-green-700 pl-1.5 hover:underline"
          onClick={() => onSwitchView("login")}
        >
          Login
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5">
      {error && <Alert type="error" message={error} />}
      <FormBuilder
        fields={fields}
        buttons={buttons}
        onSubmit={onSubmit}
        formClassName="flex flex-col gap-4"
      />
      <Divider text="Or" />
      <Google setError={setError} onClose={onClose} toast={toast} />
      {loginLink()}
    </div>
  );
};

export default Signup;

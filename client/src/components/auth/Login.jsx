import FormBuilder from "../FormBuilder";
import Divider from "../Divider";
import GoogleButton from "../GoogleButton";
import { isEmpty } from "lodash";
import callApi from "../../api/callApi";
import { useState } from "react";
import Alert from "../Alert";
import { useLoader } from "../../context/LoaderContext";
import { useToast } from "../../context/ToastContext";

const Login = (props) => {
  const { onSwitchView, onClose = () => "" } = props || {};
  const [error, setError] = useState(null);
  const { startLoading, stopLoading } = useLoader();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const onClickLogin = async (data) => {
    if (isEmpty(data)) return;

    setError(null);
    startLoading({ type: "global", prompt: "Logging you in..." });
    try {
      const response = await callApi({
        method: "POST",
        url: "/api/auth/login",
        data: data,
      });

      //TODO: set response object redux for usage
      console.log("user: ", response);
      addToast({ type: "success", message: "Welcome Back!" });
      onClose(); //close the modal
    } catch (error) {
      setError(error.message || "Invalid credentials! Try again...");
    } finally {
      stopLoading({ type: "global" });
    }
  };

  const fields = [
    {
      type: "email",
      name: "email",
      value: formData.email,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, email: e.target.value });
      },
      required: true,
      placeholder: "E-mail",
    },
    {
      type: "password",
      name: "password",
      value: formData.password,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, password: e.target.value });
      },
      required: true,
      placeholder: "Password",
    },
    {
      type: "checkbox",
      label: "Remember me",
      name: "remember_me",
      required: false,
      value: formData.remember_me,
      controlled: true,
      onChange: (e) => {
        setError(null);
        setFormData({ ...formData, remember_me: e.target.checked });
      },
    },
  ];

  const buttons = [
    {
      label: "Log In",
      type: "submit",
      variant: "success",
      className: "w-full py-2",
    },
  ];

  const signUp = () => {
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <p className="text-base text-gray-600">No account yet?</p>
        <span
          className="text-base font-semibold cursor-pointer text-green-700 pl-1.5 hover:underline"
          onClick={() => onSwitchView("signup")}
        >
          Sign up
        </span>
      </div>
    );
  };

  const forgotPassword = () => {
    return (
      <div className="flex justify-start">
        <p
          className="text-base text-gray-500 hover:text-gray-600 hover:cursor-pointer active:text-gray-700"
          onClick={() => onSwitchView("forgot_password")}
        >
          Forgot Password ?
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5">
      {error && <Alert type="error" message={error} />}
      <FormBuilder fields={fields} buttons={buttons} onSubmit={onClickLogin} />
      {forgotPassword()}
      <Divider text="Or" />
      <GoogleButton />
      {signUp()}
    </div>
  );
};

export default Login;

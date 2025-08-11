import FormBuilder from "../FormBuilder";
import Button from "../Button";
import Divider from "../Divider";
import { demoAlert } from "../../demo/alerts";

const Login = (props) => {
  const { onSwitchView } = props || {};

  const onSubmit = (data) => {
    console.log("FormData: ", data);
    alert(demoAlert(data.email));
  };

  const fields = [
    {
      type: "email",
      // label: "E-mail",
      name: "email",
      required: true,
      placeholder: "E-mail",
    },
    {
      type: "password",
      // label: "Password",
      name: "password",
      required: true,
      placeholder: "Password",
    },
    {
      type: "checkbox",
      label: "Remember me",
      name: "rememberMe",
      required: false,
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
      <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />
      {forgotPassword()}
      <Divider text="Or" />
      <Button text="Login with Google" name="google" onClick={() => ""} />
      {signUp()}
    </div>
  );
};

export default Login;

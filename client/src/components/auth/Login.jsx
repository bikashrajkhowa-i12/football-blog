import FormBuilder from "../FormBuilder";
import Button from "../Button";
import Divider from "../Divider";

const Login = (props) => {
  const { onSwitchView } = props || {};

  const onSubmit = (data) => {
    console.log("FormData: ", data);
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
      className:
        "w-full py-2 rounded-lg text-white bg-green-700 opacity-95 hover:bg-green-800 hover:opacity-100 active:bg-green-900 transition duration-300",
    },
  ];

  const signUp = () => {
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <p className="text-sm text-gray-600">No account yet?</p>
        <Button
          className="text-sm font-semibold bg-transparent shadow-none text-green-700 pl-1.5 active:bg-transparent hover:underline active:text-green-900"
          text="Sign up"
          onClick={() => onSwitchView("signup")}
        />
      </div>
    );
  };

  const forgotPassword = () => {
    return (
      <div className="flex justify-start">
        <p
          className="text-sm text-gray-500 hover:text-gray-600 hover:cursor-pointer active:text-gray-700"
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

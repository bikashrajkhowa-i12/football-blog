import Divider from "../Divider";
import Button from "../Button";
import FormBuilder from "../FormBuilder";

const Signup = (props) => {
  const { onSwitchView } = props || {};

  const onSubmit = (data) => {
    console.log("FormData: ", data);
  };

  const fields = [
    {
      type: "text",
      // label: "E-mail",
      name: "name",
      required: true,
      placeholder: "Name",
    },
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
      placeholder: "Create Password",
    },
    {
      type: "password",
      // label: "Password",
      name: "confirm_password",
      required: true,
      placeholder: "Confirm Password",
    },
  ];

  const buttons = [
    {
      label: "Sign up",
      type: "submit",
      className:
        "w-full py-2 rounded-lg text-white bg-green-700 opacity-95 hover:bg-green-800 hover:opacity-100 active:bg-green-900 transition duration-300",
    },
  ];

  const login = () => {
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <p className="text-sm text-gray-600">Already have an account?</p>
        <Button
          className="text-sm font-semibold bg-transparent shadow-none text-green-700 pl-1.5 active:bg-transparent hover:underline active:text-green-900"
          text="Login"
          onClick={() => onSwitchView("login")}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5">
      <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />
      <Divider text="Or" />
      <Button text="Sign up with Google" name="google" onClick={() => ""} />
      {login()}
    </div>
  );
};

export default Signup;

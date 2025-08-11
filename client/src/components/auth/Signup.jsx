import Divider from "../Divider";
import Button from "../Button";
import FormBuilder from "../FormBuilder";
import { demoAlert } from "../../demo/alerts";

const Signup = (props) => {
  const { onSwitchView } = props || {};

  const onSubmit = (data) => {
    console.log("FormData: ", data);
    alert(demoAlert(data.name));
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
      variant: "success",
      className: "w-full py-2",
    },
  ];

  const login = () => {
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
      <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />
      <Divider text="Or" />
      <Button text="Sign up with Google" name="google" onClick={() => ""} />
      {login()}
    </div>
  );
};

export default Signup;

import React from "react";
import FormBuilder from "../FormBuilder";

const LoginForm = () => {
  const fields = [
    {
      type: "email",
      label: "E-mail",
      name: "email",
      required: true,
      placeholder: "E-mail",
    },
    {
      type: "password",
      label: "Password",
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
  const onSubmit = (data) => {
    console.log("FormData: ", data);
  };
  const buttons = [
    {
      label: "Log In",
      type: "submit",
      className:
        "w-full py-1.5 rounded-xl text-white bg-green-800 opacity-85 hover:bg-green-900 hover:opacity-85 active:opacity-100",
    },
  ];

  return <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />;
};

export default LoginForm;

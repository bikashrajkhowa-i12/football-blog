import React from "react";
import FormBuilder from "../FormBuilder";

const LoginForm = () => {
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
  ];
  const onSubmit = (data) => {
    console.log("FormData: ", data);
  };
  const buttons = [{ label: "Log In", type: "submit" }];

  return <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />;
};

export default LoginForm;

import FormBuilder from "../FormBuilder";

const ForgotPassword = (props) => {
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
  ];

  const buttons = [
    {
      label: "Send Reset Link",
      type: "submit",
      className:
        "w-full py-2 rounded-lg text-white bg-orange-500 opacity-90 hover:opacity-100 active:bg-orange-600 transition duration-400",
    },
  ];

  const loginInstead = () => {
    return (
      <div className="flex justify-center">
        <p
          className="text-sm text-gray-500 hover:text-green-700 cursor-pointer underline"
          onClick={() => onSwitchView("login")}
        >
          Login instead
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5">
      <FormBuilder fields={fields} buttons={buttons} onSubmit={onSubmit} />
      {loginInstead()}
    </div>
  );
};

export default ForgotPassword;

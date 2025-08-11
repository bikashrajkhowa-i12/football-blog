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
      variant: "orange",
      className: "w-full py-2",
    },
  ];

  const loginInstead = () => {
    return (
      <div className="flex justify-center">
        <p
          className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer mt-4 text-center transition-colors"
          onClick={() => onSwitchView("login")}
        >
          {"<"} Back to login
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

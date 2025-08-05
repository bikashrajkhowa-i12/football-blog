import { FcGoogle } from "react-icons/fc";

const Button = (props) => {
  const {
    text = "Submit",
    name = "",
    onClick = () => "",
    className = "",
    type = "button",
  } = props || {};

  if (name && name === "google") {
    return (
      <button
        className={`flex justify-center opacity-70 gap-3 px-4 py-2 rounded-lg shadow-lg hover:opacity-80 active:opacity-100  ${className}`}
      >
        <FcGoogle className="text-[22px] mt-[3.6px]" /> {text}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className
          ? `${className}`
          : "text-sm bg-green-800 opacity-90 hover:opacity-100 active:bg-green-900 text-white font-semibold py-1 px-2 rounded-md shadow transition duration-200"
      }
    >
      {text}
    </button>
  );
};

export default Button;

import { FcGoogle } from "react-icons/fc";

const Button = (props) => {
  const {
    text = "",
    name = "",
    onClick = () => "",
    className = "",
    type = "button",
    children = [],
  } = props || {};

  if (name && name === "google") {
    return (
      <button
        className={`w-full bg-white text-md flex justify-center gap-3 px-4 py-2 rounded-lg shadow-lg opacity-70 
                    hover:opacity-80 hover:bg-gray-300 active:opacity-100 active:bg-gray-300 ${className}
                    transition duration-300`}
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
          ? className
          : `text-sm bg-green-800 opacity-90 hover:opacity-100 px-4 py-2 rounded-lg active:bg-green-900 text-white 
                  font-semibold shadow transition duration-300`
      }
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

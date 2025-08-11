import { FcGoogle } from "react-icons/fc";

const Button = (props) => {
  const {
    text = "",
    name = "",
    onClick = () => "",
    className = "",
    type = "button",
    children = [],
    variant = "primary", // secondary
    override = false,
  } = props || {};

  const variantMap = {
    primary: "bg-sky-700 text-white",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-800 text-white",
    info: "bg-sky-400 text-white",
    light: "bg-white text-black border border-gray-400",
    dark: "bg-black text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-700 text-white",
    orange: "bg-orange-500 text-white",
    // "primary+success": "bg-gradient-to-r from-sky-400 to-green-400 text-white",
  };

  const selectedVariant = `${variantMap[variant || "primary"]}`;
  const styles = override
    ? `${className}`
    : `${selectedVariant} text-sm opacity-90 hover:opacity-100 px-4 py-2 rounded-lg text-white 
                  font-semibold shadow transition duration-300 ${className}`;

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
    <button type={type} onClick={onClick} className={styles}>
      {text}
      {children}
    </button>
  );
};

export default Button;

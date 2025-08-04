const Button = (props) => {
  const {
    text = "Submit",
    onClick = () => "",
    className = "",
    type = "button",
  } = props || {};
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

const Button = (props) => {
  const {
    text = "Submit",
    onClick = {},
    clasName = "",
    type = "button",
  } = props || {};
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-xs bg-green-700 hover:bg-green-800 active:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ${clasName}`}
    >
      {text}
    </button>
  );
};

export default Button;

const Divider = (props) => {
  const { text } = props || {};
  return (
    <div className="flex items-center">
      <hr className="flex-grow border-gray-300" />
      {text && <span className="px-2 text-gray-500 text-sm">{text}</span>}
      <hr className="flex-grow border-gray-300" />
    </div>
  );
};

export default Divider;

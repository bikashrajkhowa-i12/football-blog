const Divider = (props) => {
  const { text } = props || {};
  return text ? (
    <div className="flex items-center">
      <hr className="flex-grow border-gray-400" />
      <span className="px-2 text-gray-500 text-sm">{text}</span>
      <hr className="flex-grow border-gray-400" />
    </div>
  ) : (
    <hr className="flex-grow border-gray-400" />
  );
};

export default Divider;

const Divider = (props) => {
  const { text, children, className } = props || {};
  return text || children ? (
    <div className={`flex items-center ${className}`}>
      <hr className="flex-grow border-gray-400" />
      <span className="px-2 text-gray-500 text-sm">{text || children}</span>
      <hr className="flex-grow border-gray-400" />
    </div>
  ) : (
    <hr className={`flex-grow border-gray-400 ${className}`} />
  );
};

export default Divider;

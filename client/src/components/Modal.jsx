import React from "react";
import Button from "./Button";

const Modal = (props) => {
  const { isOpen, onClose, title = "Log in", children } = props || {};
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative mx-4 sm:w-full sm:max-w-md">
        <Button
          className="absolute top-2 right-2 text-gray-500 hover:text-white text-xl bg-red-500 hover:bg-red-600 active:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
          text="✕"
        />
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

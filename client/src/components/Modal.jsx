import React from "react";
import Button from "./Button";

const Modal = (props) => {
  const { isOpen, onClose, title = "Log in", children } = props || {};
  if (!isOpen) {
    return null;
  }

  const handleBackdropCLick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={handleBackdropCLick}
    >
      <div
        className="flex flex-col gap-5 overflow-hidden bg-white rounded-2xl shadow-xl mx-4 max-w-md w-full py-10 px-8 relative sm:w-full sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="absolute top-3 right-3 text-gray-400 text-sm font-bold hover:text-gray-800 w-8 h-8 flex items-center justify-center"
          onClick={onClose}
          text="✕"
        />
        <div className="flex justify-center">
          {title && (
            <h2 className="text-lg text-gray-700 font-bold mb-4">{title}</h2>
          )}
        </div>
        <div className="p-2 w-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

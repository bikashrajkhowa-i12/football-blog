import React from "react";

const Modal = (props) => {
  const { isOpen, onClose, title = "Log in", children } = props || {};
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 overflow-y-auto">
      <div
        className="min-h-screen flex items-center justify-center px-4" // main base of the model
        onClick={() => onClose()} // onClick on this backdrop component, it closes the model!
      >
        <div
          className="relative bg-gray-200 rounded-2xl shadow-xl w-full max-w-md p-8 mx-2 my-8"
          onClick={(e) => e.stopPropagation()} // prevents the onClick() functionality of its parent component in the child component
        >
          <button
            className="absolute top-3 right-3 text-gray-400 text-sm font-bold hover:text-gray-800 w-8 h-8"
            onClick={onClose}
          >
            ✕
          </button>

          {title && (
            <h2 className="text-center text-lg font-bold text-gray-700 mb-4">
              {title}
            </h2>
          )}

          <div className="lg:p-4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

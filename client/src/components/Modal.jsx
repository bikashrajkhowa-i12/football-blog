import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, title = "Log in", children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimeout;
    let hideTimout;

    if (isOpen) {
      setShouldRender(true); // Mount the component to the DOM
      showTimeout = setTimeout(() => setVisible(true), 10); // Small delay to trigger CSS transition
    } else {
      setVisible(false); // Start hiding animation of the model
      hideTimout = setTimeout(() => setShouldRender(false), 300); // After animation ends, unmount from DOM
    }

    return () => {
      // clearing timeouts to prevent leaks
      clearTimeout(showTimeout);
      clearTimeout(hideTimout);
    };
  }, [isOpen]);

  return shouldRender ? (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-60 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="min-h-screen flex items-center justify-center px-4"
        onClick={onClose}
      >
        <div
          className={`relative bg-gray-200 rounded-2xl shadow-xl w-full max-w-md p-8 mx-2 my-8 transform transition-all duration-200 ease-out ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-70"
          }`}
          onClick={(e) => e.stopPropagation()}
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
  ) : null;
};

export default Modal;

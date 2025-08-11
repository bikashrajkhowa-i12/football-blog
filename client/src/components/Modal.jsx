import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useFullInteractionLock } from "../hooks/useFullInteractionLock";

const Modal = ({ isOpen, onClose, title = "Log in", children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);
  useFullInteractionLock(isOpen);
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
      className={`fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-60 
                transition-opacity duration-1000 lg:duration-300 ease-out
                ${visible ? "opacity-100" : "opacity-100 lg:opacity-0"}`}
    >
      {/**TODO: Use <Drawer> component for mobile view */}
      {/** Bottom drawer functionality in the below two <div>'s */}
      <div
        className="min-h-screen flex justify-center items-end lg:items-center lg:px-4"
        onClick={onClose}
      >
        <div
          className={`relative bg-gray-200 shadow-xl w-full rounded-t-3xl
                      lg:max-w-md p-8 lg:rounded-2xl lg:mx-2 lg:my-8
                      transform transition-all duration-[600ms] ease-in-out
                      lg:duration-200 pb-10 lg:pb-2
                      ${
                        visible
                          ? `translate-y-0 lg:scale-100`
                          : `translate-y-full lg:translate-y-0 lg:scale-95`
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

import React, { useEffect, useState } from "react";
import Button from "./Button";

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
      className={`fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-60 
                transition-opacity duration-1000 lg:duration-300 ease-out
                ${visible ? "opacity-100" : "opacity-100 lg:opacity-0"}`}
    >
      {/** Drawer functionality in the below two <div>'s */}
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
          <Button
            text="✕"
            className="absolute top-3 right-3 text-gray-400 text-sm font-bold hover:text-gray-800 w-8 h-8"
            onClick={onClose}
            hide=""
          />

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

/**  ######## Core logic ############
 
     ## In order to have smooth pop in-out of modal, CSS transitions cannot be applied directly on the DOM level.
     ## For eg: transition duration-300 on a component is useless if its removed immediatly from the DOM ("isOpen")
     ## To achieve that:
        1. "shouldRender": Mounts the component to DOM with opacity-0.(invisible)
        2. "visible": Make quick switch of CSS class from opacity 0-100 in 50ms. This makes the component visible.
        3. CSS transition class work smooth because of the change of opacity and not directly on the DOM level "isOpen".

     ## Code-wise explanation:
     - "isOpen" is "true" ->  
            - "shouldRender" is enabled to mount the whole modal component to DOM at opacity-0, basically invisible.
            - "visible" is triggered in 10ms to make opacity-0 to opacity-100. 
            - Smooth CSS transition works here because of the change of opacity from 0-100 + the transition classes in the components
     - "isOpen" is "false" -> 
            - "visibile" is triggered to make opacity-100 to opacity-0.
            - "shouldRender" is triggered to unmount the modal component from DOM, in 300ms so that the CSS gets enough time to make the transition.
*/

import { useEffect, useState } from "react";
import { useFreezePageInteraction } from "../hooks/useFreezePageInteraction";

const Drawer = ({
  isOpen,
  onClose,
  widthClass = "w-3/4 max-w-xs",
  heightClass = "h-screen",
  position = "left", // 'left' | 'right' | 'top' | 'bottom'
  viewScreen = "hidden",
  children,
}) => {
  const [render, setRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useFreezePageInteraction(isOpen);

  useEffect(() => {
    let showTimeout, hideTimeout;
    if (isOpen) {
      setRender(true);
      showTimeout = setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
      hideTimeout = setTimeout(() => setRender(false), 300);
    }
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [isOpen]);

  if (!render) return null;

  // Determine flex container alignment and drawer translate classes based on position
  let justifyClass, itemsClass, translateInClass, translateOutClass, sizeClass;

  switch (position) {
    case "right":
      justifyClass = "justify-end";
      itemsClass = "items-start";
      translateInClass = "translate-x-0";
      translateOutClass = "translate-x-full";
      sizeClass = `${widthClass} ${heightClass}`;
      break;
    case "left":
      justifyClass = "justify-start";
      itemsClass = "items-start";
      translateInClass = "translate-x-0";
      translateOutClass = "-translate-x-full";
      sizeClass = `${widthClass} ${heightClass}`;
      break;
    case "top":
      justifyClass = "justify-center";
      itemsClass = "items-start";
      translateInClass = "translate-y-0";
      translateOutClass = "-translate-y-full";
      sizeClass = `w-full ${heightClass}`; // full width, custom height
      break;
    case "bottom":
      justifyClass = "justify-center";
      itemsClass = "items-end";
      translateInClass = "translate-y-0";
      translateOutClass = "translate-y-full";
      sizeClass = `w-full ${heightClass}`; // full width, custom height
      break;
    default:
      justifyClass = "justify-start";
      itemsClass = "items-start";
      translateInClass = "translate-x-0";
      translateOutClass = "-translate-x-full";
      sizeClass = `${widthClass} ${heightClass}`;
  }

  // Compose responsive visibility class based on viewScreen prop:
  // For example:
  // viewScreen === "hidden" => visible only on small screens => "md:hidden"
  // viewScreen === "md" => visible on md and above => "hidden md:flex"
  // viewScreen === "lg" => visible on lg and above => "hidden lg:flex"
  // Default fallback: "md:hidden"
  let responsiveClass = "";

  if (["hidden", "md:hidden"].includes(viewScreen)) {
    responsiveClass = "md:hidden"; // visible only on small screens
  } else if (viewScreen === "sm") {
    responsiveClass = "hidden sm:flex";
  } else if (viewScreen === "md") {
    responsiveClass = "hidden md:flex";
  } else if (viewScreen === "lg") {
    responsiveClass = "hidden lg:flex";
  } else if (viewScreen === "xl") {
    responsiveClass = "hidden xl:flex";
  } else {
    // fallback
    responsiveClass = "md:hidden";
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${responsiveClass} ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div className={`min-h-screen flex ${justifyClass} ${itemsClass}`}>
        <div
          className={`bg-white shadow-xl relative transition-transform duration-300 ease-in-out ${sizeClass} ${
            visible ? translateInClass : translateOutClass
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;

import { useEffect, useState } from "react";
import { useFullInteractionLock } from "../hooks/useFullInteractionLock";

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

  useFullInteractionLock(isOpen);

  useEffect(() => {
    let showTimeout, hideTimeout;
    if (isOpen) {
      setRender(true);
      showTimeout = setTimeout(() => setVisible(true), 20); // ✅ Slightly longer for better paint
    } else {
      setVisible(false);
      hideTimeout = setTimeout(() => setRender(false), 300); // ✅ Shorter for faster close
    }
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [isOpen]);

  if (!render) return null;

  // Position config
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
      sizeClass = `w-full ${heightClass}`;
      break;
    case "bottom":
      justifyClass = "justify-center";
      itemsClass = "items-end";
      translateInClass = "translate-y-0";
      translateOutClass = "translate-y-full";
      sizeClass = `w-full ${heightClass}`;
      break;
    default:
      justifyClass = "justify-start";
      itemsClass = "items-start";
      translateInClass = "translate-x-0";
      translateOutClass = "-translate-x-full";
      sizeClass = `${widthClass} ${heightClass}`;
  }

  // Responsive visibility handling
  const responsiveMap = {
    hidden: "md:hidden",
    "md:hidden": "md:hidden",
    sm: "hidden sm:flex",
    md: "hidden md:flex",
    lg: "hidden lg:flex",
    xl: "hidden xl:flex",
  };
  const responsiveClass = responsiveMap[viewScreen] || "md:hidden";

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 ${responsiveClass} transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div className={`min-h-screen flex ${justifyClass} ${itemsClass}`}>
        <div
          className={`bg-white shadow-xl relative transition-transform duration-300 ease-out ${sizeClass} ${
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

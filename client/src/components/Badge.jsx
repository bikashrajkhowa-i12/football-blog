import React from "react";

const Badge = (props) => {
  const { className, children, variant, size } = props || {};

  const variantMap = {
    primary: "bg-sky-700 text-white",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-600 text-white",
    info: "bg-sky-400 text-white",
    light: "bg-white text-black border border-gray-400",
    dark: "bg-black text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-700 text-white",
    // "primary+success": "bg-gradient-to-r from-sky-400 to-green-400 text-white",
  };

  const sizeMap = {
    "3xs": "text-[9px]",
    "2xs": "text-[10px]",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  return (
    <span
      className={`
        px-2 font-bold
        ${sizeMap[size || "sm"]} 
        ${variantMap[variant || "primary"]}   
        ${className}
        `}
    >
      {children}
    </span>
  );
};

export default Badge;

import React from "react";

const Card = (props) => {
  const { children, className } = props || {};
  return (
    <div
      className={`rounded-lg p-4 border border-gray-300 
        transition duration-200 cursor-pointer h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

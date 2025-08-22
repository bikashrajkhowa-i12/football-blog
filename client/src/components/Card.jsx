import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        flex flex-col h-full rounded-xl bg-white shadow-sm 
        hover:shadow-md hover:-translate-y-1 hover:scale-[1.01]
        transform transition 
        duration-150 ease-out cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;

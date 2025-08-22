import React from "react";
import Button from "./Button";

const ToTop = () => {
  return (
    <div className="sticky bottom-10 flex justify-end">
      <Button
        text="↑ Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        override
        className="rounded-full text-white bg-black bg-opacity-20 hover:bg-opacity-30 py-1 px-3"
      />
    </div>
  );
};

export default ToTop;

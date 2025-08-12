import React, { useEffect, useState } from "react";
import { useFullInteractionLock } from "../hooks/useFullInteractionLock";

const GlobalLoader = ({ loading = false, prompt = "Loading..." }) => {
  const [renderLoading, setRenderLoading] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useFullInteractionLock(loading);

  useEffect(() => {
    let showTimeout, hideTimeout;

    if (loading) {
      setRenderLoading(true);
      showTimeout = setTimeout(() => setVisibleLoader(true), 10); // fade in
    } else {
      setVisibleLoader(false); // fade out
      hideTimeout = setTimeout(() => setRenderLoading(false), 300); // match transition time
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [loading]);

  if (!renderLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
        bg-black bg-opacity-70 transition-opacity duration-300 gap-10
        ${visibleLoader ? "opacity-100" : "opacity-0"}`}
    >
      {/* Loader */}
      <div
        className="w-12 h-12 md:w-20 md:h-20 border-4 border-white border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      />
      <p className="text-sky-500">{prompt}</p>
    </div>
  );
};

export default GlobalLoader;

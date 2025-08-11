import React, { useEffect, useState } from "react";

const ContentLoader = ({ loading = false }) => {
  const [renderLoading, setRenderLoading] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    let showTimeout, hideTimeout;

    if (loading) {
      setRenderLoading(true);
      showTimeout = setTimeout(() => setVisibleLoader(true), 10);
    } else {
      setVisibleLoader(false);
      hideTimeout = setTimeout(() => setRenderLoading(false), 300);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [loading]);

  if (!renderLoading) return null;

  return (
    <div
      className={`absolute inset-0 z-40 flex items-center justify-center bg-white bg-opacity-50
         transition-opacity duration-300 cursor-not-allowed
        ${visibleLoader ? "opacity-100" : "opacity-0"}`}
    >
      {/* Loader */}
      <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default ContentLoader;

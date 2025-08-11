import React, { useEffect, useState } from "react";
import { useFreezePageInteraction } from "../hooks/useFreezePageInteraction";

const LoadingWrapper = (loading = false) => {
  const [renderLoading, setRenderLoading] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useFreezePageInteraction(loading);
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 transition">
      <div className=""></div>
    </div>
  );
};

export default LoadingWrapper;

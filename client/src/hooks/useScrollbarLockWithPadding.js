import { useEffect } from "react";

export const useScrollbarLockWithPadding = (active) => {
  useEffect(() => {
    if (!active) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalBodyPadding = document.body.style.paddingRight;
    const originalHtmlPadding = document.documentElement.style.paddingRight;
    const originalBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPadding;
      document.documentElement.style.paddingRight = originalHtmlPadding;
    };
  }, [active]);
};

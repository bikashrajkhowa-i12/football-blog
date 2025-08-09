import { useEffect } from "react";
import { useScrollbarHide } from "./useScrollbarHide";

export const useInteractionLock = (lock) => {
  useScrollbarHide(lock);
  useEffect(() => {
    if (!lock) return;

    // Save originals
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;

    const scrollY = window.scrollY || window.pageYOffset;

    // Apply styles to lock scroll and preserve layout
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Prevent wheel and touchmove scroll
    const prevent = (e) => e.preventDefault();
    document.addEventListener("wheel", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });

    return () => {
      // Remove event listeners
      document.removeEventListener("wheel", prevent);
      document.removeEventListener("touchmove", prevent);

      // Restore styles
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;

      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, [lock]);
};

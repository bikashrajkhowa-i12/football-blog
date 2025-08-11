import { useEffect } from "react";
import { useScrollbarLockWithPadding } from "./useScrollbarLockWithPadding";

export const useFreezePageInteraction = (active) => {
  useScrollbarLockWithPadding(active);

  useEffect(() => {
    if (!active) return;

    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const scrollY = window.scrollY || window.pageYOffset;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = `100%`;

    const prevent = (e) => e.preventDefault();
    document.addEventListener("wheel", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });

    return () => {
      document.removeEventListener("wheel", prevent);
      document.removeEventListener("touchmove", prevent);

      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;

      window.scrollTo(0, scrollY);
    };
  }, [active]);
};

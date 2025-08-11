import { useEffect } from "react";

export const useFullInteractionLock = (active) => {
  useEffect(() => {
    if (!active) return;

    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    const preventScroll = (e) => e.preventDefault();
    const preventKeyScroll = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key)) e.preventDefault();
    };
    const freezeScrollPosition = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, { passive: false });
    window.addEventListener("scroll", freezeScrollPosition);

    document.body.style.overflowY = "scroll";

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
      window.removeEventListener("scroll", freezeScrollPosition);

      document.body.style.overflowY = "";
    };
  }, [active]);
};

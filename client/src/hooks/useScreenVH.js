import { useEffect } from "react";

export const useScreenVH = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01; //per px
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();

    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.addEventListener("resize", setVH);
      window.addEventListener("orientationchange", setVH);
    };
  }, []);
};

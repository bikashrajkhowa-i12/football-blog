import { useEffect } from "react";

export const useScreenVH = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;

      //setProperty(propertName, value, priority(optional))    "--" in propertyName means custom name
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();

    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);
};

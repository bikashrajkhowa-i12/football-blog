import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState({
    type: null, //global is mandatory, custom ++ for contentLoader
    loading: false,
    prompt: "Loading...",
  });

  const startLoading = ({ type = "global", prompt = "Loading..." }) => {
    setLoaderState({ type, loading: true, prompt });
  };

  const stopLoading = ({ type = "global" }) => {
    setLoaderState({ type, loading: false, prompt });
  };

  return (
    <LoaderContext.Provider
      value={{ ...loaderState, startLoading, stopLoading }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

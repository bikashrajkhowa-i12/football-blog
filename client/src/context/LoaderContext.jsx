import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState({
    type: null, //global is mandatory, custom ++ for contentLoader
    loading: false,
    prompt: "Loading...",
  });

  const startLoading = (type = "global") => {
    setLoaderState({ type, loading: true, prompt: "Loading..." });
  };

  const stopLoading = (type = "global") => {
    setLoaderState({ type, loading: false, prompt: "Loading..." });
  };

  return (
    <LoaderContext.Provider
      value={{ ...loaderState, startLoading, stopLoading }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);

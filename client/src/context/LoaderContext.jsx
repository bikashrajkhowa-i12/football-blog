import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState({
    type: null, //global is mandatory, custom ++ for contentLoader
    loading: false,
  });

  const startLoading = (type = "global") => {
    setLoaderState({ type, loading: true });
  };

  const stopLoading = (type = "global") => {
    setLoaderState({ type, loading: false });
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

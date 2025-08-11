import { LoaderProvider } from "./LoaderContext";

const AppProviders = ({ children }) => {
  return <LoaderProvider>{children}</LoaderProvider>;
};

export default AppProviders;

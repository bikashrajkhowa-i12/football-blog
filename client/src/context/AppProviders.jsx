import { LoaderProvider } from "./LoaderContext";
import { ToastProvider } from "./ToastContext";

const AppProviders = ({ children }) => {
  return (
    <LoaderProvider>
      <ToastProvider>{children}</ToastProvider>
    </LoaderProvider>
  );
};

export default AppProviders;

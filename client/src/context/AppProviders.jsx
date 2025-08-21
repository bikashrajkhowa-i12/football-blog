import { AuthProvider } from "./auth/AuthContext";
import { LoaderProvider } from "./LoaderContext";
import { ToastProvider } from "./ToastContext";

const AppProviders = ({ children }) => {
  return (
    <LoaderProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </LoaderProvider>
  );
};

export default AppProviders;

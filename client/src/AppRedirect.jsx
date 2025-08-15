import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useLoaderContext } from "./context/LoaderContext";

import AdminLayout from "./components/admin/AdminLayout";
import AdminRoutes from "./routes/AdminRoutes";

import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthPanel from "./components/auth/AuthPanel";
import PublicLayout from "./components/PublicLayout";

const AppRedirect = () => {
  const { loaderState, startLoading, stopLoading } = useLoaderContext();
  const [showAuthPanel, setShowAuthPanel] = useState(false);
  const switchShowAuthPanel = (value) => setShowAuthPanel(value);

  const isAdmin = false; // TODO: Read from backend / redux
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect on isAdmin change
  useEffect(() => {
    const redirectWithLoading = async () => {
      startLoading({
        type: "global",
        prompt: "Switching your workspace, please wait...",
      });

      // Allow the loader to render before navigating
      await new Promise((resolve) => setTimeout(resolve, 50));

      if (isAdmin) {
        if (!location.pathname.startsWith("/admin")) {
          navigate("/admin/dashboard", { replace: true });
        }
      } else {
        if (!location.pathname.startsWith("/home")) {
          navigate("/home/", { replace: true });
        }
      }

      // Stop loading after a small delay to ensure page has rendered
      await new Promise((resolve) => setTimeout(resolve, 100));
      stopLoading({ type: "global" });
    };

    redirectWithLoading();
  }, [
    isAdmin,
    navigate,
    location.pathname,
    loaderState,
    startLoading,
    stopLoading,
  ]);

  return (
    <>
      {isAdmin ? (
        <main className="flex-1">
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        </main>
      ) : (
        <>
          <Navbar
            showAuthPanel={showAuthPanel}
            setShowAuthPanel={switchShowAuthPanel}
          />

          <AuthPanel
            isOpen={showAuthPanel}
            onClose={() => setShowAuthPanel(false)}
          />

          <main className="flex-1 py-20">
            <PublicLayout>
              <PublicRoutes />
            </PublicLayout>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppRedirect;

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useLoader } from "./context/LoaderContext";

import AdminLayout from "./components/admin/AdminLayout";
import AdminRoutes from "./routes/AdminRoutes";

import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthPanel from "./components/auth/AuthPanel";
import PublicLayout from "./components/PublicLayout";
import { useAuth } from "./context/auth/AuthContext";

const AppRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user = {}, isAuthenticated = false } = useAuth();
  const { startLoading, stopLoading } = useLoader();
  const [showAuthPanel, setShowAuthPanel] = useState(false);

  const isAdmin = isAuthenticated && user?.role === "admin";
  const validatePath = location.pathname.startsWith("/admin");
  const switchShowAuthPanel = (value) => setShowAuthPanel(value);

  // Redirect on isAdmin change
  useEffect(() => {
    if (isAdmin) {
      startLoading({
        type: "global",
        prompt: "Switching to admin workspace, please wait...",
      });
      navigate("/admin/dashboard", { replace: true });
      stopLoading({ type: "global" });
    } else if (!isAdmin && validatePath) {
      startLoading({
        type: "global",
        prompt: "Switching to user workspace, please wait...",
      });
      navigate("/home/", { replace: true });
      stopLoading({ type: "global" });
    }
  }, [isAdmin]);

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

import { useState } from "react";

import AdminRoutes from "./routes/AdminRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AuthPanel from "./components/auth/AuthPanel";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

const AppRedirect = () => {
  const [showAuthPanel, setShowAuthPanel] = useState(false);
  const switchShowAuthPanel = (value) => setShowAuthPanel(value);
  // TODO: Read these from redux
  // const { role } = useSelector((state) => state.auth); // "admin" or "user"

  // const isAdmin = role === "admin";

  const isAdmin = false; // read from backend

  return (
    <>
      {isAdmin ? (
        <>
          <main className="flex-1">
            <AdminLayout>
              <AdminRoutes />
            </AdminLayout>
          </main>
        </>
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

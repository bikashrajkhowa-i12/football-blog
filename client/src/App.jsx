import React, { useState } from "react";

import "./App.css";

import { useScreenVH } from "./hooks/useScreenVH";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthPanel from "./components/auth/AuthPanel";
import BlogRoutes from "./routes/BlogRoutes";
import ProfileRoutes from "./routes/ProfileRoutes";

const App = () => {
  useScreenVH(); // set the view port height dynamically based on actually screen-vh
  const [showAuthPanel, setShowAuthPanel] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const switchShowAuthPanel = (value) => setShowAuthPanel(value);
  const switchShowProfile = (value) => setShowProfile(value); //TODO: temp route fix

  return (
    <div className="min-h-[calc(var(--vh)*100)] flex flex-col">
      <Navbar
        showAuthPanel={showAuthPanel}
        setShowAuthPanel={switchShowAuthPanel}
        setShowProfile={switchShowProfile}
      />
      <AuthPanel
        isOpen={showAuthPanel}
        onClose={() => setShowAuthPanel(false)}
      />

      <main className="flex-1 py-20">
        <BlogRoutes />
        {showProfile && <ProfileRoutes />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

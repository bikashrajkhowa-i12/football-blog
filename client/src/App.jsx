import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import { useScreenVH } from "./hooks/useScreenVH";

import Navbar from "./components/Navbar";
import AuthPanel from "./components/auth/AuthPanel";
import Footer from "./components/Footer";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import ProfilePage from "./pages/profile/ProfilePage";

const App = () => {
  useScreenVH(); // set the view port height dynamically based on actually screen-vh
  const [showAuthPanel, setShowAuthPanel] = useState(false);
  const switchShowAuthPanel = (value) => setShowAuthPanel(value);

  return (
    <div className="min-h-[calc(var(--vh)*100)] flex flex-col">
      <Navbar
        showAuthPanel={showAuthPanel}
        setShowAuthPanel={switchShowAuthPanel}
      />
      <AuthPanel
        isOpen={showAuthPanel}
        onClose={() => setShowAuthPanel(false)}
      />

      <main className="flex-1 py-20">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />

            {/** route -> /blog/`${slug}-${blog_id}`  */}
            <Route path="/blog/:slugWithId" element={<BlogPost />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

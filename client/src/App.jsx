import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import AuthPanel from "./components/auth/AuthPanel";

import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import { useScreenVH } from "./hooks/useScreenVH";

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

      {/* Main content, offset for fixed navbar */}
      <main className="flex-1 py-20">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />

            {/** route -> /blog/`${slug}-${blog_id}`  */}
            <Route path="/blog/:slugWithId" element={<BlogPost />} />
          </Routes>
        </Layout>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

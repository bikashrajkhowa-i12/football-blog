import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthModal from "./components/auth/AuthModal";

import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import Layout from "./components/Layout";

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showAuthModal={() => setShowAuthModal(true)} />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      {/* Main content, offset for fixed navbar */}
      <main className="flex-1 pt-20">
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

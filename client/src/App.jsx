import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthModal from "./components/auth/AuthModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSignUpClick={() => setShowModal(true)} />
      {showModal && (
        <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}

      {/* Main content, offset for fixed navbar */}
      <main className="flex-1 pt-10">
        <div className="mx-auto max-w-6xl pt-20 py-3 px-4 h-full">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

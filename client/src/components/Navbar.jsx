import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "./Button";
import Drawer from "./Drawer";

const Navbar = ({ setShowAuthPanel, isLoggedIn = false }) => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = () => setShowDrawer(false);

  const appLogo = (
    <img
      src="/logos/navlogo1.png"
      alt="logo"
      className="h-10 w-auto cursor-pointer"
      onClick={() => {
        navigate("/home");
        closeDrawer();
      }}
    />
  );

  const navLinks = (className = "") => {
    const linkClass = "hover:text-green-700 active:text-green-800 text-sm";
    return (
      <div className={className}>
        {/**if logged in and mobile-view, display the "Profile" at top of drawer-links */}
        {isLoggedIn && (
          <div
            className="md:hidden"
            onClick={() => {
              navigate("/profile");
              closeDrawer();
            }}
          >
            Profile
          </div>
        )}

        <Link to="/home" className={linkClass} onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/latest" className={linkClass} onClick={closeDrawer}>
          Latest
        </Link>
        <Link to="/fixtures" className={linkClass} onClick={closeDrawer}>
          Fixtures
        </Link>
        <Link to="/teams" className={linkClass} onClick={closeDrawer}>
          Teams
        </Link>

        {/**if not logged in and mobile-view, display the "Log-in" at end of drawer-links */}
        {!isLoggedIn && (
          <Button
            variant="success"
            className="md:hidden py-1"
            onClick={() => {
              closeDrawer();
              setShowAuthPanel(true);
            }}
          >
            Log in
          </Button>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between py-3">
          {/* Mobile Menu Button */}
          <div className="w-10 md:hidden">
            <button
              className="mb-[6px] opacity-60 mr-4 text-2xl rounded-md"
              onClick={() => setShowDrawer((v) => !v)}
            >
              ☰
            </button>
          </div>

          {/* Logo */}
          {appLogo}

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">{navLinks("flex gap-4")}</div>

          {/* Login/Profile */}
          <div className="w-20 flex justify-center items-center">
            <div className="hidden md:block">
              {!isLoggedIn ? (
                <Button
                  variant="success"
                  text="Log In"
                  onClick={() => setShowAuthPanel(true)}
                />
              ) : (
                <span
                  className="text-xl border-2 border-black opacity-80 rounded-full cursor-pointer hover:opacity-100 transition duration-300"
                  onClick={() => navigate("/profile")}
                >
                  👤
                </span>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <Drawer
          isOpen={showDrawer}
          onClose={closeDrawer}
          position="left"
          viewScreen="md:hidden" //visible only on small-screens
        >
          <div className="flex justify-between p-4 border-b border-gray-300">
            {appLogo}
            <span
              className="flex items-center text-2xl mb-2 opacity-70 cursor-pointer"
              onClick={closeDrawer}
            >
              ✖
            </span>
          </div>
          {navLinks("flex flex-col gap-4 p-4")}
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;

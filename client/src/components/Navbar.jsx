import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CircleUserRound, Menu } from "lucide-react";

import { useAuth } from "../context/auth/AuthContext";
import Button from "./Button";
import Drawer from "./Drawer";

const Navbar = ({ setShowAuthPanel }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [showDrawer, setShowDrawer] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDrawer = () => setShowDrawer((prev) => !prev);
  const closeDrawer = () => setShowDrawer(false);

  const handleNavigation = (path) => {
    navigate(path);
    closeDrawer();
  };

  const handleLogout = () => {
    if (logout) logout();
    navigate("/home");
    closeDrawer();
    setDropdownOpen(false);
  };

  const appLogo = (
    <Link to="/home" onClick={closeDrawer}>
      <img
        src="/logos/navlogo1.png"
        alt="App Logo"
        className="h-10 w-auto cursor-pointer"
      />
    </Link>
  );

  const navLinks = (className = "") => {
    const linkClass = "hover:text-green-700 active:text-green-800 text-sm";

    return (
      <div className={className}>
        {isAuthenticated && (
          <div
            className="md:hidden cursor-pointer mb-2 font-medium"
            onClick={() => handleNavigation("/profile")}
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

        {!isAuthenticated && (
          <Button
            variant="success"
            className="md:hidden py-1 mt-2"
            onClick={() => {
              closeDrawer();
              setShowAuthPanel(true);
            }}
          >
            Log In
          </Button>
        )}

        {/* Mobile Logout */}
        {isAuthenticated && (
          <Button
            variant="danger"
            className="md:hidden mt-4"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </div>
    );
  };

  const profileAvatar = (
    <div className="relative">
      <div
        className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
        title={user?.name || "Profile"}
      >
        {user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt={user?.name || "User Avatar"}
            className="w-full h-full object-cover"
          />
        ) : (
          <CircleUserRound size={26} className="text-gray-600 m-auto" />
        )}
      </div>

      {/* Desktop Dropdown */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white text-black border-2 rounded border-gray-300 shadow-md z-50">
          <div
            className="px-4 py-2 hover:bg-gray-500 border-b-[2px] border-gray-300 cursor-pointer"
            onClick={() => {
              navigate("/profile");
              setDropdownOpen(false);
            }}
          >
            Profile
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between py-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="p-1 rounded bg-gray-400 text-white hover:bg-gray-500"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          {appLogo}

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">{navLinks("flex gap-4")}</div>

          {/* Login/Profile */}
          <div className="flex items-center justify-center w-20">
            <div className="hidden md:block">
              {!isAuthenticated ? (
                <Button
                  variant="success"
                  text="Log In"
                  onClick={() => setShowAuthPanel(true)}
                />
              ) : (
                profileAvatar
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <Drawer
          isOpen={showDrawer}
          onClose={closeDrawer}
          position="left"
          viewScreen="md:hidden"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            {appLogo}
            <button
              className="text-2xl opacity-70 hover:opacity-100"
              onClick={closeDrawer}
              aria-label="Close menu"
            >
              ✖
            </button>
          </div>
          {navLinks("flex flex-col gap-4 p-4")}
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;

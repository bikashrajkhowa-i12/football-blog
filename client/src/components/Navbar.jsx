import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  CircleUserRound,
  LogIn,
  LogOut,
  Menu,
  User,
} from "lucide-react";

import { useAuth } from "../context/auth/AuthContext";
import Button from "./Button";
import Drawer from "./Drawer";
import AppLogo from "./AppLogo";

const Navbar = ({ setShowAuthPanel }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { isAuthenticated, user, logout } = useAuth();
  const [showDrawer, setShowDrawer] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDrawer = () => setShowDrawer((prev) => !prev);
  const closeDrawer = () => setShowDrawer(false);

  const handleLogout = () => {
    if (logout) logout();
    navigate("/home");
    closeDrawer();
    setDropdownOpen(false);
  };

  const appLogo = (
    <Link to="/home" onClick={closeDrawer}>
      <AppLogo />
    </Link>
  );

  const navLinks = (className = "") => {
    const links = [
      { path: "/home", label: "Home" },
      { path: "/latest", label: "Latest" },
      { path: "/trending", label: "Trending" },
      { path: "/fixtures", label: "Fixtures" },
      // { path: "/teams", label: "Teams" },
    ];

    return (
      <div className={className}>
        {isAuthenticated && (
          <Link
            to={"/profile"}
            className={`md:hidden cursor-pointer font-semibold ${
              pathname === "/profile" ? "text-green-700" : "text-gray-800"
            }`}
            onClick={() => closeDrawer()}
          >
            Profile
          </Link>
        )}

        {links.map((link) => {
          const isActive = pathname === link.path;
          const linkClass = `hover:text-green-700 ${
            isActive ? "text-green-700" : "text-gray-800"
          } text-md font-semibold`;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={linkClass}
              onClick={closeDrawer}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Mobile Login/Logout buttons */}
        {!isAuthenticated ? (
          <Button
            variant="success"
            className="md:hidden py-1 mt-2"
            onClick={() => {
              closeDrawer();
              setShowAuthPanel(true);
            }}
          >
            <div className="flex justify-center gap-2 items-center">
              Login <LogIn size={15} className="mt-0.5" />
            </div>
          </Button>
        ) : (
          <Button
            variant="dark"
            className="md:hidden mt-4"
            onClick={handleLogout}
          >
            <div className="flex justify-center gap-2 items-center">
              Logout <LogOut size={15} className="mt-0.5" />
            </div>
          </Button>
        )}
      </div>
    );
  };

  const profileAvatar = (
    <div className="relative">
      <div
        className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer"
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
            className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
            onClick={() => {
              navigate("/profile");
              setDropdownOpen(false);
            }}
          >
            <div className="flex justify-center gap-2 items-center">
              Profile <User size={15} className="mt-0.5" />
            </div>
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
            onClick={handleLogout}
          >
            <div className="flex justify-center gap-2 items-center">
              Logout <LogOut size={15} className="mt-0.5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 bg-transparent">
        <nav className="flex items-center justify-between py-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="p-1 rounded text-black"
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
              <ChevronLeft />
            </button>
          </div>
          {navLinks("flex flex-col gap-4 p-4")}
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const navLinks = () => {
    const className = "hover:text-green-700 active:text-green-800 text-sm";
    return (
      <>
        <a href="##" className={className} onClick={handleOptionClick}>
          Home
        </a>
        <a href="##" className={className} onClick={handleOptionClick}>
          Latest
        </a>
        <a href="##" className={className} onClick={handleOptionClick}>
          Fixtures
        </a>
        <a href="##" className={className} onClick={handleOptionClick}>
          Teams
        </a>
      </>
    );
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <img
            src="/logos/navlogo1.png"
            alt="logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => navigate("/home")}
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">{navLinks()}</div>

          <div className="hidden md:flex flex-col items-center mt-4">
            <Button
              text="Sign Up"
              onClick={() => {
                handleOptionClick();
              }}
            />
            <a
              href="##"
              className="text-sky-700 hover:text-green-700 active:text-green-800 text-sm"
            >
              Already have an account?
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className={`md:hidden flex flex-col gap-4 px-4 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            }`}
          >
            {navLinks()}
            <Button
              text="Sign Up"
              className="ml-4"
              onClick={handleOptionClick}
            />
            <a
              href="##"
              className="text-sky-600 active:text-green-800 text-sm"
              onClick={() => {
                handleOptionClick();
              }}
            >
              Already have an account?
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

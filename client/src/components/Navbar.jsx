import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = (props) => {
  const { showAuthModal = () => "" } = props || {};
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClickNavLink = () => {
    setIsOpen(false);
  };

  const navLinks = () => {
    const className = "hover:text-green-700 active:text-green-800 text-sm";
    return (
      <>
        <a href="##" className={className} onClick={onClickNavLink}>
          Home
        </a>
        <a href="##" className={className} onClick={onClickNavLink}>
          Latest
        </a>
        <a href="##" className={className} onClick={onClickNavLink}>
          Fixtures
        </a>
        <a href="##" className={className} onClick={onClickNavLink}>
          Teams
        </a>
      </>
    );
  };

  const renderDesktopView = () => {
    return (
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <img
          src="/logos/navlogo1.png"
          alt="logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => {
            navigate("/home");
            setIsOpen(false);
          }}
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">{navLinks()}</div>

        <div className="hidden md:flex flex-col items-center">
          <Button text="Log In" onClick={showAuthModal} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mb-3"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>
    );
  };

  const renderMobileView = () => {
    return isOpen ? (
      <div
        className={`md:hidden flex flex-col gap-4 px-4 overflow-hidden transition duration-300 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navLinks()}
        <Button
          text="Log In"
          onClick={() => {
            setIsOpen(false);
            showAuthModal();
          }}
        />
      </div>
    ) : null;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white py-2 border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-8">
        {renderDesktopView()}
        {renderMobileView()}
      </div>
    </header>
  );
};

export default Navbar;

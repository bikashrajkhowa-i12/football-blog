const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-green-900">
      <div className="flex justify-center items-center flex-col py-2 text-center text-gray-400 text-xs md:text-sm select-none">
        <h3 className="leading-tight">
          © {new Date().getFullYear()} Footscribe90 — Crafted with passion for
          football fans.
        </h3>
        <p className="mt-0.5">— Bikash :)</p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-green-900">
      <div className="flex justify-center items-center flex-col pt-6 pb-2 text-center text-gray-400 md:text-sm text-[10px]">
        <h3>
          © {new Date().getFullYear()} Footscribe90 — Crafted with passion for
          football fans.
        </h3>
        <p className="mt-1">— Bikash :)</p>
      </div>
    </footer>
  );
};

export default Footer;

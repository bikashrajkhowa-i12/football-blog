import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 flex">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">Footscribe90</h2>
          <p className="mt-2 text-sm">
            Crafted with passion for football fans. Bringing you the latest
            stories, insights & match coverage.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/latest" className="hover:text-green-400">
                Latest Blogs
              </Link>
            </li>
            <li>
              <Link to="/trending" className="hover:text-green-400">
                Trending
              </Link>
            </li>
            <li>
              <Link to="/fixtures" className="hover:text-green-400">
                Fixtures
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        {/* <div>
          <h3 className="text-white font-semibold mb-3">Leagues</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/league/premier-league"
                className="hover:text-green-400"
              >
                Premier League
              </Link>
            </li>
            <li>
              <Link to="/league/la-liga" className="hover:text-green-400">
                La Liga
              </Link>
            </li>
            <li>
              <Link to="/league/bundesliga" className="hover:text-green-400">
                Bundesliga
              </Link>
            </li>
            <li>
              <Link to="/league/ligue-1" className="hover:text-green-400">
                Ligue 1
              </Link>
            </li>
            <li>
              <Link to="/league/serie-a" className="hover:text-green-400">
                Serie A
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 transition text-white text-sm py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-xs md:text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Footscribe90 — All rights reserved.
          <span className="ml-1">Made with ❤️ by Bikash</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import anymall from "../assets/anymall.png";
import { Link, useLocation } from "react-router-dom";
import { useSearch } from "../components/SearchContext";

function Navbar() {
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useSearch();

  const getButtonClasses = (path) => {
    const base = "px-6 py-1 rounded-md transition";
    const inactive = "text-gray-800 hover:text-gray-400 font-bold";
    const activeCls =
      "text-teal-500 underline font-bold decoration-teal-500 bg-transparent text-lg";

    return `${base} ${
      location.pathname === path ? activeCls : inactive
    }`;
  };

  return (
    <nav className="flex justify-between items-center p-1 shadow-md font-poppins bg-white">
      <img
        src={anymall}
        alt="ANYMALL.PH"
        className="h-14 w-60 object-contain"
      />

      <ul className="flex items-center gap-6">
        <li>
          <Link to="/" className={getButtonClasses("/")}>
            HOME
          </Link>
        </li>

        <li className="relative group">
  <Link to="/brands" className={getButtonClasses("/brands")}>
    BRANDS
  </Link>
  </li>

        <li className="relative group">
          <Link to="/products" className={getButtonClasses("/products")}>
            PRODUCTS
          </Link>
        </li>

        <li>
          <Link to="/about" className={getButtonClasses("/about")}>
            ABOUT US
          </Link>
        </li>

        <li>
          <Link to="/contact" className={getButtonClasses("/contact")}>
            CONTACT
          </Link>
        </li>

        <li>
          <div className="flex items-center gap-3">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="px-3 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
    />

            <button
              aria-label="favorites"
              className="p-2 text-2xl text-gray-600 hover:text-teal-500 transition"
            >
              <i className="fas fa-heart"></i>
            </button>

          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
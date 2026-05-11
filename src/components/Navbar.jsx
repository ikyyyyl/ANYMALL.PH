import React from "react";
import anymall from "../assets/anymall.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

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

  {/* DROPDOWN */}
  <div className="absolute left-3 mt-6 w-40 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    {/* arrow pointer */}
    <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-300 "></div>
    <Link
      to="https://www.mi.com/ph/store/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      Xiaomi
    </Link>

    <Link
      to="https://ph.dreametech.com/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      Dreame
    </Link>

    <Link
      to="https://us.amazfit.com/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      Amazfit
    </Link>

    <Link
      to="https://ph.ddpai.com/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      DDPAI
    </Link>

    <Link
      to="https://uwant.com.ph/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      Uwant
    </Link>

    <Link
      to="https://gotoptoy.com/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      TopToy
    </Link>

        <Link
      to="https://wanbo.cn/"
      className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
    >
      Wanbo
    </Link>
  </div>
</li>

        <li className="relative group">
          <Link to="/products" className={getButtonClasses("/products")}>
            PRODUCTS
          </Link>

          {/* DROPDOWN */}
          <div className="absolute left-3 mt-6 w-40 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {/* arrow pointer */}
            <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-300 "></div>
            <Link
              to="/cleaning"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
            >
              Cleaning Devices
            </Link>

            <Link
              to="/smart-home"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
            >
              Smart Home
            </Link>

            <Link
              to="/car-tech"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
            >
              Car Tech
            </Link>

            <Link
              to="/kitchen"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition"
            >
              Kitchen Appliances
            </Link>
          </div>
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
              className="px-3 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />

            <button
              aria-label="favorites"
              className="p-2 text-2xl text-gray-600 hover:text-teal-500 transition"
            >
              <i className="fas fa-heart"></i>
            </button>

            <button
              aria-label="cart"
              className="p-2 text-2xl text-gray-600 hover:text-teal-500 transition"
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
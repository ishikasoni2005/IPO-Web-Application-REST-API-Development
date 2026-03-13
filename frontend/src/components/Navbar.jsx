import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          IPO<span className="text-gray-700">WebApp</span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-700 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/ipos"
            className="text-gray-700 hover:text-indigo-700 transition font-medium"
          >
            IPOs
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-indigo-700 transition font-medium"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

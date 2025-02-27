import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">WEIGHTS Inventory</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/faq" className="text-gray-600 hover:text-blue-600">
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <Link to="/get-started" className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Start Now
        </Link>

        {/* Mobile Menu (Hidden on desktop) */}
        <button className="md:hidden text-gray-800 text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;

// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-purple-700">
          <img src="/logo.png" alt="Mary Joy Logo" className="h-8 w-8 object-contain" />
          Mary Joy Calangi
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/why-financial-advisor">Why a Financial Advisor</Link>
          <Link to="/services">Services</Link>
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

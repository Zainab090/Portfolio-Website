import Link from "next/link";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          ZAINAB
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-white transition duration-200">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition duration-200">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition duration-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

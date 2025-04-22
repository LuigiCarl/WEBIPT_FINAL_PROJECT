'use client';

import { useState } from "react";
import { HiOutlineDotsVertical, HiOutlineX, HiOutlineMenu } from "react-icons/hi";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg">
        {/* Logo */}
        <a className="text-3xl font-bold leading-none" href="#">
          <img src="/logo4.png" alt="Logo" className="h-16 w-16" />
        </a>

        {/* Center Menu */}
        <div className="hidden md:flex space-x-6 ml-auto mr-8">
          <a className="text-gray-600 hover:text-blue-600 text-sm font-semibold" href="#">
            Home
          </a><HiOutlineDotsVertical />
          <a className="text-gray-600 hover:text-blue-600 text-sm font-semibold" href="#">
            Services
          </a><HiOutlineDotsVertical />
          <a className="text-gray-600 hover:text-blue-600 text-sm font-semibold" href="#">
            About
          </a><HiOutlineDotsVertical />
          <a className="text-gray-600 hover:text-blue-600 text-sm font-semibold" href="#">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-black-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>

        {/* Sign In & Sign Up Dropdown Menu */}
        <div
          className={`absolute top-16 right-4 w-48 bg-white shadow-lg flex flex-col space-y-2 p-4 rounded-lg transition-transform ${
            isOpen ? "block" : "hidden"
          } lg:hidden`}
        >
          <a
            className="py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign Up
          </a>
        </div>

        {/* Right: Sign In & Sign Up for Desktop */}
        <div className="hidden lg:flex space-x-3">
          <a
            className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 opacity-25 z-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Footer Section */}
      <div className="mt-auto text-center py-6">
        <p className="my-4 text-xs text-gray-400">Copyright © 2021</p>
      </div>
    </>
  );
}
'use client';

import { useState } from "react";
import { HiOutlineDotsVertical, HiOutlineX, HiOutlineMenu } from "react-icons/hi";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 py-4 flex justify-between items-center bg-transparent bg-opacity-50 shadow-lg h-16 z-50 backdrop-blur-sm">
        {/* Logo */}
        <a className="text-3xl font-bold leading-none" href="#">
          <img src="/logo.png" alt="Logo" className="h-16 w-16" />
        </a>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-semibold ml-auto mr-8">
          <li><a href="#home" className="hover:text-emerald-600">Home</a></li>
          <HiOutlineDotsVertical />
          <li><a href="#services" className="hover:text-emerald-600">Services</a></li>
          <HiOutlineDotsVertical />
          <li><a href="#about" className="hover:text-emerald-600">About</a></li>
          <HiOutlineDotsVertical />
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>

        {/* Sign In & Sign Up Dropdown Menu */}
        <div
          className={`absolute top-16 right-4 w-48 bg-transparent bg-opacity-50 shadow-lg flex flex-col space-y-2 p-4 rounded-lg transition-transform ${isOpen ? "block" : "hidden"
            } lg:hidden`}
        >
          <a
            className="py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="py-2 px-4 bg-emerald-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign Up
          </a>
        </div>

        {/* Right: Sign In & Sign Up for Desktop */}
        <div className="hidden lg:flex space-x-3">
          <a
            className="py-2 px-6 bg-gray-50 hover:scale-110 hover:shadow-xl text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>

          <a
            className="py-2 px-6 bg-emerald-500 hover:scale-110 hover:shadow-xl text-sm text-white font-bold rounded-xl transition duration-200"
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

    </>
  );
}
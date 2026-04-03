import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/60 dark:bg-black/40 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Karthik N
      </h1>
      <div className="flex gap-6 items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleDarkMode} className="text-xl focus:outline-none">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

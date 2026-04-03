import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center px-6">

      {/* ✅ PROFILE IMAGE */}
      <motion.img
        src={process.env.PUBLIC_URL + "/IMG_8117.jpg"}
        alt="Karthik"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ✅ HEADING */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building Scalable Applications with <br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Code, Creativity, and Intelligence
        </span>
      </motion.h1>

      {/* ✅ DESCRIPTION */}
      <motion.p
        className="max-w-xl text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Full Stack Developer | AI Enthusiast<br />
        Computer Science student passionate about scalable, real-world solutions.
      </motion.p>

      {/* ✅ BUTTONS */}
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          View Projects
        </a>

        <a
          href={process.env.PUBLIC_URL + "/karthik_resumee.pdf"}
          download="Karthik_Resume.pdf"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

      {/* ✅ SOCIAL ICONS */}
      <div className="flex gap-6 mt-8 text-2xl">
        <a href="https://github.com/Karthikrajaurs" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/karthik-n-43a483207" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Karthikrajaurs", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/Karthik-N", label: "LinkedIn" },
  { icon: <FaEnvelope />, href: "mailto:karthikcse0809@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#060b14] border-t border-white/6 pt-12 pb-6 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <a href="#hero" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tight text-white font-mono">
                K
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  N
                </span>
                <span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer & AI Enthusiast building scalable, impactful software.
              Open to work and collaboration.
            </p>
            {/* Availability dot */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Available for hire</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold tracking-[3px] uppercase text-gray-600 mb-4">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors py-1 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + socials */}
          <div>
            <p className="text-xs font-bold tracking-[3px] uppercase text-gray-600 mb-4">
              Connect
            </p>
            <div className="space-y-2 mb-5">
              <a href="mailto:karthikcse0809@gmail.com" className="block text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                karthikcse0809@gmail.com
              </a>
              <a href="tel:8056866519" className="block text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                +91 8056866519
              </a>
              <p className="text-sm text-gray-500">Coimbatore, Tamil Nadu</p>
            </div>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Karthik N. Built with
            <FaHeart className="text-red-500/70 text-xs" />
            using React & Tailwind.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors border border-white/8 hover:border-cyan-500/30 px-4 py-2 rounded-lg"
          >
            <FaArrowUp className="text-xs" /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}


import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

// Typing animation hook
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating orb component
function Orb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none ${className}`}
    />
  );
}

// Particle background
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 210, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Flutter Developer",
    "Problem Solver",
  ];
  const typedRole = useTypingEffect(roles);

  // ✅ FIX: Use process.env.PUBLIC_URL for correct GitHub Pages paths
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_8117.jpg`;
  const resumeUrl = `${process.env.PUBLIC_URL}/karthik_resumee.pdf`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060b14]"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Glowing orbs */}
      <Orb className="w-[500px] h-[500px] bg-cyan-500 top-[-100px] left-[-150px]" />
      <Orb className="w-[400px] h-[400px] bg-blue-600 bottom-[-80px] right-[-100px]" />
      <Orb className="w-[200px] h-[200px] bg-indigo-400 top-1/2 left-1/3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,210,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,210,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-14 px-6 max-w-6xl mx-auto pt-24 pb-10"
      >
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 leading-none">
            Karthik{" "}
            <span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
            >
              N
            </span>
          </h1>

          {/* Typing role */}
          <div className="flex items-center gap-2 justify-center md:justify-start mb-5 h-9">
            <span className="text-xl md:text-2xl font-semibold text-gray-300">
              {typedRole}
            </span>
            <span className="w-0.5 h-7 bg-cyan-400 animate-pulse rounded" />
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mb-8">
            Building{" "}
            <span className="text-cyan-300 font-semibold">scalable applications</span>{" "}
            with Code, Creativity & Intelligence — CS Engineering student passionate
            about full-stack and on-device AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* ✅ FIXED: resume download using PUBLIC_URL */}
            <motion.a
              href={resumeUrl}
              download="Karthik_N_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-7 py-3 border border-cyan-500/50 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/Karthikrajaurs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <FaGithub className="text-lg" />
              </span>
              <span className="text-sm hidden sm:block">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/Karthik-N"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5 transition-all">
                <FaLinkedin className="text-lg" />
              </span>
              <span className="text-sm hidden sm:block">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Profile image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 blur-2xl opacity-40 scale-110" />

          {/* Rotating dashed border */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
            style={{ animation: "spin 20s linear infinite" }}
          />

          {/* Corner accent dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />

          {/* ✅ FIXED: Image using PUBLIC_URL */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20">
            <img
              src={imageUrl}
              alt="Karthik N"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback: show initials if image fails to load
                e.target.style.display = "none";
                e.target.parentNode.classList.add("fallback-avatar");
              }}
            />
            {/* Fallback initials overlay (hidden by default) */}
            <div
              className="absolute inset-0 hidden items-center justify-center text-5xl font-black text-cyan-400 bg-gradient-to-br from-gray-900 to-gray-800 fallback-text"
              style={{ display: "none" }}
            >
              KN
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            className="absolute -left-16 top-8 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-center shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <p className="text-xl font-black text-cyan-400">8.0</p>
            <p className="text-xs text-gray-400">CGPA</p>
          </motion.div>

          <motion.div
            className="absolute -right-16 bottom-10 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-center shadow-xl"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="text-xl font-black text-blue-400">250+</p>
            <p className="text-xs text-gray-400">Problems Solved</p>
          </motion.div>

          <motion.div
            className="absolute -right-14 top-6 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-center shadow-xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-xl font-black text-indigo-400">3+</p>
            <p className="text-xs text-gray-400">Projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-transparent rounded"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>

      {/* Spin keyframe */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fallback-avatar .fallback-text { display: flex !important; }
      `}</style>
    </section>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaMobileAlt, FaBrain } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Web",
    emoji: "💎",
    title: "Jewellery E-Commerce Website",
    subtitle: "Full-Stack Web Platform",
    tech: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
    desc: "Developed a secure full-stack e-commerce platform with user authentication, product catalogue management, and a shopping cart. Optimised database queries to improve page load speed by 20%.",
    highlights: ["20% faster load", "Secure Auth", "Cart System"],
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/20",
    accent: "cyan",
    github: "https://github.com/Karthikrajaurs",
    icon: <FaGlobe className="text-cyan-400" />,
  },
  {
    id: 2,
    category: "Mobile",
    emoji: "💪",
    title: "FitNest Gym Planner",
    subtitle: "Cross-Platform Mobile App",
    tech: ["Flutter", "Firebase", "Android Studio"],
    desc: "Cross-platform fitness tracker enabling personalised workout plans with real-time data sync via Firebase. Designed intuitive UI/UX that increased user engagement during testing by 30%.",
    highlights: ["30% engagement ↑", "Firebase Sync", "Cross-Platform"],
    color: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/20",
    accent: "blue",
    github: "https://github.com/Karthikrajaurs",
    icon: <FaMobileAlt className="text-blue-400" />,
  },
  {
    id: 3,
    category: "AI",
    emoji: "🧠",
    title: "AI Speech Summarization",
    subtitle: "On-Device AI Application",
    tech: ["Python", "TensorFlow Lite", "Flutter"],
    desc: "Building an on-device AI speech classification and summarization app for real-time audio analysis. Uses TensorFlow Lite for lightweight inference directly on mobile hardware.",
    highlights: ["On-Device AI", "Real-Time Audio", "TF Lite"],
    color: "from-indigo-500 to-purple-600",
    glow: "group-hover:shadow-indigo-500/20",
    accent: "indigo",
    github: "https://github.com/Karthikrajaurs",
    icon: <FaBrain className="text-indigo-400" />,
  },
];

const filters = ["All", "Web", "Mobile", "AI"];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-[#07090f]">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
      </div>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,210,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-cyan-400 mb-3">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects spanning web, mobile, and AI — each built to solve real problems.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? "text-white"
                  : "text-gray-500 border border-white/10 hover:text-gray-300 hover:border-white/20"
              }`}
            >
              {activeFilter === f && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{f}</span>
            </motion.button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
                layout
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden hover:border-${p.accent}-500/40 transition-all duration-400 shadow-xl ${p.glow}`}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.color}`} />

                {/* Card body */}
                <div className="p-6">
                  {/* Icon + category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                        {p.icon}
                      </div>
                      <span className={`text-xs font-bold tracking-widest uppercase text-${p.accent}-400 opacity-70`}>
                        {p.category}
                      </span>
                    </div>
                    <span className="text-3xl">{p.emoji}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1 leading-tight group-hover:text-cyan-200 transition-colors">
                    {p.title}
                  </h3>
                  <p className={`text-${p.accent}-400 text-xs font-semibold mb-3 opacity-80`}>
                    {p.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.highlights.map((h, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded-full bg-${p.accent}-500/10 text-${p.accent}-300 border border-${p.accent}-500/20 font-medium`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/8 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-white/8">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-medium"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <span className="text-white/10">|</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs text-${p.accent}-400 hover:text-${p.accent}-300 transition-colors font-medium`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Karthikrajaurs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all text-sm font-medium"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}
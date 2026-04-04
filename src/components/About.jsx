import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaBrain, FaUsers } from "react-icons/fa";

const stats = [
  { value: "8.0", label: "CGPA", icon: "🎓" },
  { value: "250+", label: "DSA Problems", icon: "💡" },
  { value: "3+", label: "Projects Built", icon: "🚀" },
  { value: "5+", label: "Events Led", icon: "🏆" },
];

const traits = [
  {
    icon: <FaCode className="text-cyan-400 text-xl" />,
    title: "Full-Stack Builder",
    desc: "From pixel-perfect UIs to robust backend systems — React, Flutter, PHP, MySQL.",
  },
  {
    icon: <FaBrain className="text-blue-400 text-xl" />,
    title: "AI Enthusiast",
    desc: "Exploring on-device AI with TensorFlow Lite for real-world speech applications.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-400 text-xl" />,
    title: "Mobile Developer",
    desc: "Cross-platform Flutter apps with Firebase integration and smooth UX.",
  },
  {
    icon: <FaUsers className="text-cyan-300 text-xl" />,
    title: "Team Leader",
    desc: "Event coordinator managing 10+ volunteers and delivering 100% on time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#060b14]">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-cyan-400 mb-3">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Bio text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="relative">
              {/* Decorative left border */}
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                I'm a{" "}
                <span className="text-white font-semibold">
                  Computer Science & Engineering undergraduate
                </span>{" "}
                at Alva's Institute of Engineering and Technology, Mangalore
                — graduating in 2026 with a CGPA of{" "}
                <span className="text-cyan-400 font-bold">8.0</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                I specialise in building scalable full-stack web and mobile
                applications, and I'm deeply interested in applying AI to
                real-world problems. I thrive in Agile environments, love
                optimising for performance, and always ship with clean code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Outside of tech, I lead event teams, contribute to open
                source, and compete on the cricket field — because great
                software and great teamwork share the same mindset.
              </p>

              {/* CTA */}
              <motion.a
                href="#projects"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-8 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                See my work →
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 backdrop-blur-sm group cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-3 group-hover:border-cyan-500/30 transition-all">
                  {t.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{t.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/8 hover:border-cyan-500/30 text-center group overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
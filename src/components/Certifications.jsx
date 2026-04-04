import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaChartLine, FaCloud, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const certs = [
  {
    title: "Data Structures & Applications",
    org: "CodeChef",
    icon: <FaCode className="text-2xl" />,
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/8",
    desc: "Solved 250+ competitive programming challenges using C and Java, strengthening algorithmic problem-solving skills.",
    badge: "250+ Problems",
  },
  {
    title: "Analysis & Design of Algorithms",
    org: "CodeChef",
    icon: <FaChartLine className="text-2xl" />,
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bg: "bg-blue-500/8",
    desc: "Mastered greedy algorithms, dynamic programming, and graph theory for advanced optimisation.",
    badge: "Algorithms",
  },
  {
    title: "ServiceNow Micro-Certifications",
    org: "ServiceNow",
    icon: <FaCloud className="text-2xl" />,
    color: "from-indigo-500 to-purple-600",
    glow: "shadow-indigo-500/20",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/8",
    desc: "Acquired foundational knowledge in ServiceNow administration, workflow automation, and cloud-based service management.",
    badge: "Cloud & ITSM",
  },
  {
    title: "Infosys Springboard Certifications",
    org: "Infosys",
    icon: <FaLaptopCode className="text-2xl" />,
    color: "from-purple-500 to-pink-600",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    bg: "bg-purple-500/8",
    desc: "Completed multiple certifications covering programming fundamentals, software development, and database essentials.",
    badge: "Multi-Domain",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 overflow-hidden bg-[#07090f]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-cyan-400 mb-3">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Continuous learning through structured programs and self-driven problem solving.
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative p-6 rounded-2xl bg-white/2 border ${cert.border} hover:border-opacity-60 backdrop-blur-sm shadow-xl ${cert.glow} hover:shadow-2xl transition-all duration-400 overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color}`} />

              {/* Hover glow bg */}
              <div className={`absolute inset-0 ${cert.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}>
                      <span className="text-white">{cert.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                        {cert.org}
                      </p>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${cert.accent} bg-white/5 border border-white/10`}>
                        {cert.badge}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                    <FaCheckCircle className="text-green-400 text-sm" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-100 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white/2 border border-white/8 backdrop-blur-sm"
        >
          {[
            { value: "4", label: "Certifications Earned" },
            { value: "250+", label: "Problems Solved" },
            { value: "∞", label: "Still Learning" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </section>
  );
}
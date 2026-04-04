import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaTrophy, FaStar } from "react-icons/fa";
import { MdEventNote, MdSportsBaseball } from "react-icons/md";

const experiences = [
  {
    role: "Student Event Coordinator",
    org: "Event Management Committee",
    org_short: "College",
    period: "2022 – 2026",
    icon: <MdEventNote className="text-xl" />,
    color: "from-cyan-500 to-blue-600",
    accent: "cyan",
    type: "Leadership",
    highlights: [
      { icon: <FaUsers />, text: "Led 10+ volunteers per event" },
      { icon: <MdEventNote />, text: "Organised 5+ college events" },
      { icon: <FaStar />, text: "100% on-time execution rate" },
    ],
    desc: "Organised and coordinated major college events from planning to execution, managing logistics, budgets, and cross-functional volunteer teams. Developed strong project management and communication skills.",
  },
  {
    role: "Active Cricket Team Member",
    org: "Inter-Collegiate Cricket",
    org_short: "Sports",
    period: "2022 – 2026",
    icon: <MdSportsBaseball className="text-xl" />,
    color: "from-blue-500 to-indigo-600",
    accent: "blue",
    type: "Sports",
    highlights: [
      { icon: <FaTrophy />, text: "2 inter-collegiate tournament wins" },
      { icon: <FaUsers />, text: "Team strategy contributor" },
      { icon: <FaStar />, text: "Consistent representation" },
    ],
    desc: "Represented the college in inter-collegiate cricket tournaments, actively contributing to team strategy, on-field execution, and team spirit. Tournaments wins reflect collaborative excellence under pressure.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden bg-[#060b14]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-cyan-400 mb-3">
            Beyond Code
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Leadership, teamwork, and discipline — skills forged outside the IDE.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative md:flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-[calc(50%-3rem)] w-full">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className={`group p-6 rounded-2xl bg-white/2 border border-${exp.accent}-500/15 hover:border-${exp.accent}-500/40 backdrop-blur-sm shadow-xl transition-all duration-400 overflow-hidden relative`}
                  >
                    {/* Top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color}`} />
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-${exp.accent}-500/4 opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <div className="relative z-10">
                      {/* Role header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                            <span className="text-white">{exp.icon}</span>
                          </div>
                          <div>
                            <span className={`text-xs font-bold tracking-widest uppercase text-${exp.accent}-400 opacity-70`}>
                              {exp.type}
                            </span>
                            <h3 className="text-white font-bold text-base leading-tight group-hover:text-cyan-100 transition-colors">
                              {exp.role}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Org + period */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-sm text-${exp.accent}-300 font-semibold`}>{exp.org}</span>
                        <span className="text-white/10">•</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <FaCalendarAlt className="text-xs" /> {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.desc}</p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((h, j) => (
                          <div
                            key={j}
                            className={`flex items-center gap-2 text-sm text-gray-300`}
                          >
                            <span className={`text-${exp.accent}-400 text-xs`}>{h.icon}</span>
                            {h.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#060b14] shadow-lg shadow-cyan-400/40 z-10" />

                {/* Spacer for other side */}
                <div className="md:w-[calc(50%-3rem)] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-white/4 to-white/1 border border-white/8 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-1">Education</p>
              <h3 className="text-white font-bold text-lg">
                B.E. Computer Science & Engineering
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Alva's Institute of Engineering and Technology, Mangalore
              </p>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400">8.0</div>
                <div className="text-xs text-gray-500 mt-1">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">2026</div>
                <div className="text-xs text-gray-500 mt-1">Graduation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}
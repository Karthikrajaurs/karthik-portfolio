import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaJs, FaReact, FaGitAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaAndroid, FaMobileAlt,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiMysql, SiTensorflow, SiPhp, SiC } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const categories = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: 88, color: "#f89820" },
      { name: "Python", icon: <FaPython />, level: 82, color: "#3776ab" },
      { name: "C", icon: <SiC />, level: 80, color: "#a8b9cc" },
      { name: "JavaScript", icon: <FaJs />, level: 78, color: "#f7df1e" },
      { name: "SQL", icon: <FaDatabase />, level: 84, color: "#00758f" },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React", icon: <FaReact />, level: 80, color: "#61dafb" },
      { name: "Flutter", icon: <SiFlutter />, level: 85, color: "#54c5f8" },
      { name: "PHP", icon: <SiPhp />, level: 72, color: "#8892be" },
      { name: "HTML5", icon: <FaHtml5 />, level: 92, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 88, color: "#1572b6" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git/GitHub", icon: <FaGitAlt />, level: 85, color: "#f05032" },
      { name: "Firebase", icon: <SiFirebase />, level: 78, color: "#ffca28" },
      { name: "MySQL", icon: <SiMysql />, level: 80, color: "#4479a1" },
      { name: "TF Lite", icon: <SiTensorflow />, level: 65, color: "#ff6f00" },
      { name: "Android Studio", icon: <FaAndroid />, level: 75, color: "#3ddc84" },
    ],
  },
];

const allIcons = [
  { icon: <FaJava />, name: "Java", color: "#f89820" },
  { icon: <FaPython />, name: "Python", color: "#3776ab" },
  { icon: <SiC />, name: "C", color: "#a8b9cc" },
  { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaDatabase />, name: "SQL", color: "#00adef" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <SiFlutter />, name: "Flutter", color: "#54c5f8" },
  { icon: <SiPhp />, name: "PHP", color: "#8892be" },
  { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572b6" },
  { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
  { icon: <SiFirebase />, name: "Firebase", color: "#ffca28" },
  { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
  { icon: <SiTensorflow />, name: "TF Lite", color: "#ff6f00" },
  { icon: <FaAndroid />, name: "Android Studio", color: "#3ddc84" },
  { icon: <VscCode />, name: "VS Code", color: "#007acc" },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color }} className="text-lg">
            {skill.icon}
          </span>
          <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-lg"
            style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#060b14]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl" />
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
            My Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Technologies I work with to build performant, scalable applications.
          </p>
        </motion.div>

        {/* Icon grid - all skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {allIcons.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/6 transition-all cursor-default"
            >
              <span className="text-2xl transition-transform" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category tabs + progress bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Category selector */}
          <div className="flex md:flex-col gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`relative px-5 py-3 rounded-xl text-left font-semibold text-sm transition-all duration-300 ${
                  activeCategory === i
                    ? "text-white bg-white/8 border border-cyan-500/30"
                    : "text-gray-500 border border-transparent hover:text-gray-300 hover:bg-white/3"
                }`}
              >
                {activeCategory === i && (
                  <motion.span
                    layoutId="cat-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-r"
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/2 border border-white/8 backdrop-blur-sm space-y-5">
            {categories[activeCategory].skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["Agile / Scrum", "Problem Solving", "Quick Learning", "Leadership", "Adaptability", "Team Collaboration"].map(
            (s, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium text-cyan-300 bg-cyan-500/8 border border-cyan-500/20"
              >
                {s}
              </span>
            )
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
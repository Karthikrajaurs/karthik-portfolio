import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaLinkedin, FaGithub,
  FaMapMarkerAlt, FaCheckCircle,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope className="text-xl" />,
    label: "Email",
    value: "karthikcse0809@gmail.com",
    href: "mailto:karthikcse0809@gmail.com",
    color: "from-cyan-500 to-blue-600",
    accent: "cyan",
  },
  {
    icon: <FaPhone className="text-xl" />,
    label: "Phone",
    value: "+91 8056866519",
    href: "tel:8056866519",
    color: "from-blue-500 to-indigo-600",
    accent: "blue",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    href: null,
    color: "from-indigo-500 to-purple-600",
    accent: "indigo",
  },
];

const socials = [
  {
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
    handle: "Karthik N",
    href: "https://linkedin.com/in/Karthik-N",
    color: "#0a66c2",
    hover: "hover:border-blue-500/50 hover:bg-blue-500/8",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    handle: "Karthikrajaurs",
    href: "https://github.com/Karthikrajaurs",
    color: "#e6edf3",
    hover: "hover:border-white/30 hover:bg-white/5",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("karthikcse0809@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-[#07090f]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-600/6 rounded-full blur-3xl" />
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
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            I'm actively looking for opportunities. Whether you have a role, a project,
            or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/4 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg flex-shrink-0`}>
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <span className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors text-lg">
                      →
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/8">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg flex-shrink-0`}>
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Copy email button */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all font-semibold text-sm"
            >
              {copied ? (
                <>
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-green-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <FaEnvelope />
                  Copy Email Address
                </>
              )}
            </motion.button>
          </div>

          {/* Right: CTA + socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Big CTA card */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">👋</div>
                <h3 className="text-white font-black text-xl mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  I'm actively looking for full-time roles, internships, and freelance projects
                  in full-stack development and AI. Let's build something great together.
                </p>
                <a
                  href="mailto:karthikcse0809@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow text-sm"
                >
                  <FaEnvelope /> Send a Message
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group flex flex-col items-center gap-2 py-5 rounded-2xl bg-white/2 border border-white/8 ${s.hover} transition-all duration-300`}
                >
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">{s.label}</p>
                    <p className="text-gray-500 text-xs">{s.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/8 border border-green-500/20">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0 shadow-lg shadow-green-400/50" />
              <p className="text-green-300 text-sm font-medium">
                Available for opportunities — typically responds within 24h
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
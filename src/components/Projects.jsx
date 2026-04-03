import { motion } from "framer-motion";

const projects = [
  {
    title: "Jewellery E-Commerce Website",
    tech: "HTML, CSS, PHP, MySQL",
    desc: "Developed a secure full-stack e-commerce platform with login, cart, and product management.",
  },
  {
    title: "FitNest Gym Planner App",
    tech: "Flutter, Firebase",
    desc: "Cross-platform fitness tracker with personalized workouts and 30% increased engagement.",
  },
  {
    title: "AI Speech Summarization App",
    tech: "Python, TensorFlow Lite, Flutter",
    desc: "On-device speech classification and real-time summarization.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-glass rounded-xl border border-white/10 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm italic mb-2">{p.tech}</p>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const skills = [
  "Java", "Python", "C", "SQL", "JavaScript", "React", "Flutter", "Git", "VS Code", "Android Studio"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

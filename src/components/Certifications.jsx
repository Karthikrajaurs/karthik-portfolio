export default function Certifications() {
  const certs = [
    "CodeChef DSA (250+ Problems Solved)",
    "Algorithms & Optimization - CodeChef",
    "ServiceNow Micro-Certifications",
    "Infosys Springboard Certifications",
  ];

  return (
    <section id="certifications" className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        {certs.map((c, i) => (
          <li key={i} className="border-b border-gray-500/20 pb-2">{c}</li>
        ))}
      </ul>
    </section>
  );
}

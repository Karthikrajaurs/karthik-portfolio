import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gradient-to-b from-gray-100 dark:from-gray-900 to-transparent">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <p className="mb-4 text-lg">Let's connect and build something great!</p>
      <div className="flex flex-col gap-3">
        <a href="mailto:karthikcse0809@gmail.com" className="flex justify-center items-center gap-2"><FaEnvelope /> karthikcse0809@gmail.com</a>
        <a href="tel:8056866519" className="flex justify-center items-center gap-2"><FaPhone /> 8056866519</a>
      </div>
      <div className="flex justify-center gap-6 text-2xl mt-6">
        <a href="https://linkedin.com/in/karthik-n-43a483207" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Karthikrajaurs" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-[#0e0e10] text-gray-800 dark:text-gray-200 min-h-screen transition-all duration-500">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

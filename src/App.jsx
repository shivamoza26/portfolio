import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './index.css';

function App() {
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 motion-safe:transition-colors motion-safe:duration-200">
      {/* Skip link for accessibility */}
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

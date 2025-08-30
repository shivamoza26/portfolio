import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Articles from './sections/Articles';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import './index.css';

function AppProgressive() {
  console.log('AppProgressive component is rendering - Complete Portfolio');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 motion-safe:transition-colors motion-safe:duration-200">
      <div className="p-4 bg-red-500 text-white">
        <h1>Testing Progressive Build - Complete Portfolio</h1>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
      
      {/* Skip link for accessibility */}
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Articles />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Progressive build test</h2>
        <div className="bg-green-500 text-white p-4 rounded">
          Complete portfolio with all sections
        </div>
      </div>
    </div>
  );
}

export default AppProgressive;

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

function AppIncrementalTest() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div style={{ padding: '1rem', backgroundColor: 'green', color: 'white' }}>
        <h1>Incremental Test: All Components</h1>
      </div>
      <Header />
      <main>
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
    </div>
  );
}

export default AppIncrementalTest;

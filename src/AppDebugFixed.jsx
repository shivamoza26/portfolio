import React from 'react';
import Header from './components/Header';
import HeroSimple from './sections/HeroSimple';
import About from './sections/About';
import Skills from './sections/Skills';
import ProjectsFixed from './sections/ProjectsFixed';
import './index.css';

function App() {
  console.log('App component is rendering with ProjectsFixed');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="p-4 bg-red-500 text-white">
        <h1>Testing with ProjectsFixed component</h1>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <Header />
      
      <main className="pt-20">
        <HeroSimple />
        <About />
        <Skills />
        <ProjectsFixed />
      </main>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">ProjectsFixed section with real data</h2>
        <div className="bg-green-500 text-white p-4 rounded">
          Testing if fixed Projects component works with real project data
        </div>
      </div>
    </div>
  );
}

export default App;

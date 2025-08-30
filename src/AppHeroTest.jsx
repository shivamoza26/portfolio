import React from 'react';
import Hero from './sections/Hero';
import './index.css';

function AppHeroTest() {
  console.log('AppHeroTest component is rendering');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="p-4 bg-red-500 text-white">
        <h1>Testing Hero Component</h1>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <main>
        <Hero />
      </main>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Hero component test</h2>
        <div className="bg-green-500 text-white p-4 rounded">
          Testing if Hero component works
        </div>
      </div>
    </div>
  );
}

export default AppHeroTest;

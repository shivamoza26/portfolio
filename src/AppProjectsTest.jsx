import React from 'react';
import Projects from './sections/Projects';
import './index.css';

function AppProjectsTest() {
  console.log('AppProjectsTest component is rendering');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="p-4 bg-red-500 text-white">
        <h1>Testing Projects Component</h1>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <main>
        <Projects />
      </main>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Projects component test</h2>
        <div className="bg-green-500 text-white p-4 rounded">
          Testing if Projects component works
        </div>
      </div>
    </div>
  );
}

export default AppProjectsTest;

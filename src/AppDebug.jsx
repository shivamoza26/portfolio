import React from 'react';
import Header from './components/Header';
import HeroSimple from './sections/HeroSimple';
import './index.css';

function App() {
  console.log('App component is rendering with Header and Hero');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="p-4 bg-red-500 text-white">
        <h1>Testing with Header + Hero components</h1>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <Header />
      
      <main className="pt-20">
        <HeroSimple />
      </main>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Hero section loaded</h2>
        <div className="bg-green-500 text-white p-4 rounded">
          If you see this after the Hero section, both Header and Hero are working
        </div>
      </div>
    </div>
  );
}

export default App;

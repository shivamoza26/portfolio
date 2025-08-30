import React from 'react';

const HeroSimple = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Shivam Oza
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Scientist & Analytics Expert
          </p>
          <div className="bg-green-500 text-white p-4 rounded">
            Simplified Hero Component - If you see this, Hero basic structure works
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;

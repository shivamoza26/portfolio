import React from 'react';

const ProjectsSimple = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simplified Projects Section - Testing Basic Structure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-300">Test project description</p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Test project description</p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project 3</h3>
            <p className="text-gray-600 dark:text-gray-300">Test project description</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-500 text-white rounded">
          Projects Simple Component - If you see this, basic projects structure works
        </div>
      </div>
    </section>
  );
};

export default ProjectsSimple;

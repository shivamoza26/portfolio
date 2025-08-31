import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/skills.js';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = Object.keys(skillsData);

  const SkillCard = ({ skill, index }) => (
    <div
      className={`flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${200 + (index * 100)}ms` }}
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="font-semibold text-gray-900 dark:text-gray-100">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            My Tech Stack
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}>
            The tools and technologies I use to bring ideas to life and solve complex problems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 shadow-lg">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              {activeCategory}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData[activeCategory].map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

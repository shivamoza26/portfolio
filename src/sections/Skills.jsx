import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/skills.js';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  // Get skills from only 3 main categories
  const selectedCategories = ["Programming Languages", "Data Science & ML", "Data Tools & Libraries"];
  const selectedSkills = selectedCategories.flatMap(category => 
    skillsData[category] ? skillsData[category].slice(0, 5) : []
  );

  const SkillCard = ({ skill, index }) => (
    <div
      className={`flex items-center gap-3 p-3 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="text-xl transform hover:scale-110 transition-transform duration-200">{skill.icon}</span>
      <span className="font-medium text-gray-900 dark:text-gray-100">
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
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            My Tech Stack
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The tools and technologies I use to bring ideas to life and solve complex problems.
          </p>
        </div>

        {/* Skills Grid - 3 Categories Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {selectedSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

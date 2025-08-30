import React, { useState, useEffect, useRef } from 'react';
import { skillsData, certifications, achievements } from '../data/skills.js';

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

  const SkillBar = ({ skill, index }) => (
    <div
      className={`mb-6 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${800 + (index * 100)}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {skill.experience}
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {skill.level}%
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${1000 + (index * 100)}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Technical Expertise
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}>
            A comprehensive overview of my technical skills, certifications, and professional achievements in data science and analytics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-2 shadow-lg">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {activeCategory}
            </h3>
            <div className="space-y-4">
              {skillsData[activeCategory].map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className={`flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Technical Proficiency Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {Object.values(skillsData).flat().length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {certifications.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

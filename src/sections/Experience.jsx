import React, { useState } from 'react';
import { experienceData, educationData, certifications } from '../data/experience';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  const TimelineItem = ({ item, index, isEducation = false }) => {
    const isExpanded = expandedItems.has(item.id);
    const isEven = index % 2 === 0;

    return (
      <div className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}>
        {/* Timeline line and dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
          {index < (isEducation ? educationData.length - 1 : experienceData.length - 1) && (
            <div className="w-0.5 h-24 bg-gray-300 dark:bg-gray-600 mt-2"></div>
          )}
        </div>

        {/* Content */}
        <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              {!isEven && (
                <img
                  src={item.logo}
                  alt={isEducation ? item.institution : item.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              )}
              <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {isEducation ? item.degree : item.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  {isEducation ? item.institution : item.company}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span>📍 {item.location}</span>
                  <span>•</span>
                  <span>📅 {item.period}</span>
                  {!isEducation && (
                    <>
                      <span>•</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
                        {item.type}
                      </span>
                    </>
                  )}
                </div>
                {isEducation && item.gpa && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    GPA: {item.gpa}
                  </p>
                )}
              </div>
              {isEven && (
                <img
                  src={item.logo}
                  alt={isEducation ? item.institution : item.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Technologies/Coursework */}
            {(item.technologies || item.coursework) && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {isEducation ? 'Key Coursework:' : 'Technologies:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(item.technologies || item.coursework).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Expandable content */}
            {(item.responsibilities || item.achievements || item.projects || item.honors) && (
              <div>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <svg
                    className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-4 animate-in slide-in-from-top duration-300">
                    {item.responsibilities && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.projects && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Notable Projects:
                        </h4>
                        <ul className="space-y-1">
                          {item.projects.map((project, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-purple-500 mt-1">🚀</span>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.honors && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Honors & Recognition:
                        </h4>
                        <ul className="space-y-1">
                          {item.honors.map((honor, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-yellow-500 mt-1">🏆</span>
                              {honor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Spacer for the other side */}
        <div className="w-5/12"></div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career progression, education, and professional achievements in data science and analytics.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'experience' && (
            <div className="relative">
              {experienceData.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  item={experience}
                  index={index}
                />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="relative">
              {educationData.map((education, index) => (
                <TimelineItem
                  key={education.id}
                  item={education}
                  index={index}
                  isEducation={true}
                />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {cert.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>📅 Issued: {cert.date}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Career Stats */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Career Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Team Members Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

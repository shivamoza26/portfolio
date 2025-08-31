import React, { useState, useEffect, useRef } from 'react';

const About = () => {
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

  const highlights = [
    {
      title: 'Education',
      description: 'Pursuing Bachelor of Engineering in Information Technology from Thakur College of Engineering and Technology.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: 'Interests',
      description: 'Passionate about machine learning, data visualization, and discovering patterns in complex datasets.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Currently Learning',
      description: 'Advancing skills in Python, SQL, Tableau, and exploring AI/ML frameworks like TensorFlow.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Section Heading */}
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            About Me
          </h2>
          
          {/* Decorative line */}
          <div 
            className={`w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '400ms' }}
            aria-hidden="true"
          />
          
          {/* Bio paragraph */}
          <div 
            className={`max-w-3xl mx-auto motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-prose mx-auto">
              I'm a detail-oriented data enthusiast with a passion for uncovering insights that drive meaningful business decisions. 
              My analytical mindset, combined with strong technical skills, allows me to transform complex data into clear, actionable stories. 
              I thrive on solving challenging problems and am constantly exploring new tools and methodologies to enhance my analytical capabilities. 
              When I'm not analyzing data, you'll find me staying updated with the latest trends in data science and contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg motion-safe:hover:shadow-xl motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${800 + (index * 150)}ms`,
                transitionDuration: '700ms, 200ms',
                transitionProperty: 'opacity, transform, box-shadow'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200">
                {highlight.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-3">
                {highlight.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

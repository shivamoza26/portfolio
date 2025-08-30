import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, prefersReducedMotion ? 0 : 100);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [prefersReducedMotion]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 80;
      const elementPosition = projectsSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" aria-hidden="true" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-1/4 w-80 h-80 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Column - Content */}
          <div 
            className={`space-y-6 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: prefersReducedMotion ? '0ms' : '200ms',
              opacity: prefersReducedMotion ? 1 : (isVisible ? 1 : 0),
              transform: prefersReducedMotion ? 'none' : (isVisible ? 'translateY(0)' : 'translateY(2rem)')
            }}
          >
            {/* Greeting */}
            <div 
              className="text-lg text-blue-600 dark:text-blue-400 font-medium"
              style={{ 
                opacity: prefersReducedMotion ? 1 : 0,
                animationDelay: prefersReducedMotion ? '0ms' : '400ms',
                animation: (isVisible && !prefersReducedMotion) ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              👋 Hello, I'm
            </div>
            
            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-200 leading-tight"
              style={{ 
                animationDelay: '600ms',
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Shivam Oza
              </span>
            </h1>
            
            {/* Subheading */}
            <h2 
              className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400"
              style={{ 
                animationDelay: '800ms',
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              Aspiring Data Analyst
            </h2>
            
            {/* Value Proposition */}
            <p 
              className="text-lg text-gray-500 dark:text-gray-400 max-w-prose leading-relaxed"
              style={{ 
                animationDelay: '1000ms',
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              Transforming data into actionable insights through analytics, visualization, and storytelling.
            </p>
            
            {/* Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              style={{ 
                animationDelay: '1200ms',
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <a 
                href="#projects"
                onClick={handleScrollToProjects}
                className="bg-blue-600 text-white rounded-xl px-6 py-4 font-semibold hover:bg-blue-700 motion-safe:transition-all motion-safe:duration-200 motion-safe:transform motion-safe:hover:scale-105 shadow-lg motion-safe:hover:shadow-xl min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 group"
              >
                <span>View Projects</span>
                <svg 
                  className="ml-2 w-5 h-5 motion-safe:transform motion-safe:group-hover:translate-x-1 motion-safe:transition-transform motion-safe:duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-xl px-6 py-4 font-semibold motion-safe:transition-all motion-safe:duration-200 min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 group"
              >
                <span>Download Resume</span>
                <svg 
                  className="ml-2 w-5 h-5 motion-safe:transform motion-safe:group-hover:translate-y-0.5 motion-safe:transition-transform motion-safe:duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div 
            className={`flex justify-center md:justify-end motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="relative"
              style={{ 
                animationDelay: '800ms',
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Profile container with gradient border */}
              <div className="relative p-1 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-2">
                  <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                    {/* Placeholder profile image */}
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                        <svg 
                          className="w-20 h-20 text-blue-600 dark:text-blue-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Profile Photo
                      </p>
                    </div>
                    
                    {/* You can replace the above with an actual optimized image like this: */}
                    {/* 
                    <picture>
                      <source srcSet="/images/profile.webp" type="image/webp" />
                      <img 
                        src="/images/profile.jpg" 
                        alt="Shivam Oza - Aspiring Data Analyst"
                        width="400"
                        height="400"
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                    </picture>
                    */}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 motion-safe:animate-pulse" aria-hidden="true" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 rounded-full opacity-40 motion-safe:animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

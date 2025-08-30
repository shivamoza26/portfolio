import React, { useEffect, useState } from 'react';

const HeroFixed = () => {
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
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with animation */}
        <h1 
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-200 dark:via-blue-300 dark:to-gray-200 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible && !prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : prefersReducedMotion 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
          }`}
        >
          Full Stack Developer
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible && !prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : prefersReducedMotion 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: prefersReducedMotion ? '0ms' : '200ms' }}
        >
          Crafting modern web experiences with{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{' '}
          <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, and{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">cutting-edge technologies</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 ${
            isVisible && !prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : prefersReducedMotion 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: prefersReducedMotion ? '0ms' : '400ms' }}
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label="View my projects"
          >
            View My Work
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label="Get in touch with me"
          >
            Get In Touch
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible && !prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : prefersReducedMotion 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: prefersReducedMotion ? '0ms' : '600ms' }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <div className={`w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center ${
              prefersReducedMotion ? '' : 'animate-pulse'
            }`}>
              <div className={`w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 ${
                prefersReducedMotion ? '' : 'animate-bounce'
              }`} style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Resume Download Button - positioned absolutely */}
        <div className="absolute bottom-8 left-4 sm:left-8">
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className={`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
              isVisible && !prefersReducedMotion 
                ? 'opacity-100 translate-y-0' 
                : prefersReducedMotion 
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '800ms' }}
            aria-label="Download my resume"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroFixed;

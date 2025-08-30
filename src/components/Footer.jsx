import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Copyright Text */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2025 Shivam Oza · Built with React & Tailwind
          </p>
          
          {/* Back to Top Link */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-sm text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 motion-safe:transition-colors motion-safe:duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg px-2 py-2 min-h-[44px]"
            aria-label="Scroll back to top of page"
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

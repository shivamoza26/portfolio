import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const observerRef = useRef(null);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  // Debounced scroll handler
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // IntersectionObserver setup for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5 // Set threshold to 0.5 as requested
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Initialize observer
    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Function to set up observations
    const setupObserver = () => {
      if (observerRef.current) {
        navItems.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            observerRef.current.observe(element);
          }
        });
      }
    };

    // Initial setup
    setupObserver();

    // Handle scroll events for additional responsiveness
    const handleScroll = debounce(() => {
      // Find the section that's most visible in the viewport
      let maxVisibleSection = 'home';
      let maxVisibleRatio = 0;

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          const visibleRatio = visibleTop / Math.min(rect.height, viewportHeight);
          
          if (visibleRatio > maxVisibleRatio && visibleRatio >= 0.5) {
            maxVisibleRatio = visibleRatio;
            maxVisibleSection = id;
          }
        }
      });

      if (maxVisibleRatio >= 0.5) {
        setActiveSection(maxVisibleSection);
      }
    }, 100);

    // Handle resize events to recalculate intersections
    const handleResize = debounce(() => {
      if (observerRef.current) {
        // Disconnect and reconnect observer to recalculate on resize
        observerRef.current.disconnect();
        setupObserver();
      }
      // Also trigger scroll handler to update active section
      handleScroll();
    }, 250);

    // Set initial active section based on current scroll position
    const setInitialActiveSection = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navItems.find(item => item.id === hash)) {
        setActiveSection(hash);
      } else {
        handleScroll();
      }
    };

    // Set up event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Set initial state
    setTimeout(setInitialActiveSection, 100);

    return () => {
      // Clean up on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Remove navItems dependency to prevent recreation

  // Mobile menu accessibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    // Immediately update active section for responsive feedback
    setActiveSection(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = targetElement.offsetTop - headerHeight;
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      window.scrollTo({
        top: elementPosition,
        behavior: prefersReduced ? 'auto' : 'smooth'
      });
    }
    
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 motion-safe:transition-all motion-safe:duration-200" 
      role="banner"
    >
      <nav 
        className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center" 
        role="navigation" 
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg"
          >
            Shivam Oza
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-5 py-3 rounded-xl motion-safe:transition-all motion-safe:duration-200 text-sm font-medium min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl px-5 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 motion-safe:transition-all motion-safe:duration-200 min-h-[44px] flex items-center ml-2 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            Resume
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            ref={hamburgerRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 min-h-[44px] min-w-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="lg:hidden fixed top-[73px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg z-50 max-h-[calc(100vh-73px)] overflow-y-auto"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="max-w-6xl mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-5 py-4 rounded-xl motion-safe:transition-all motion-safe:duration-200 text-base font-medium min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInFromTop 0.3s ease-out forwards'
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl px-5 py-4 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 min-h-[44px] flex items-center justify-between mt-4 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                role="menuitem"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                style={{ 
                  animationDelay: `${navItems.length * 50}ms`,
                  animation: 'slideInFromTop 0.3s ease-out forwards'
                }}
              >
                <span>Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

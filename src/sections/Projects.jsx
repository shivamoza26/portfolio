import React, { useState, useEffect, useRef, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
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

  // Filter and search projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => 
        project.tags && project.tags.includes(activeFilter)
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.tech.some(tech => tech.toLowerCase().includes(search)) ||
        project.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Sort projects
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'tech':
          return b.tech.length - a.tech.length;
        case 'recent':
        default:
          return 0; // Keep original order for recent
      }
    });

    return sorted;
  }, [activeFilter, searchTerm, sortBy]);

  // Get unique tags for filter buttons
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags || []))];
  const onTabKeyDown = (e, index) => {
    const count = allTags.length;
    let next = index;
    if (e.key === 'ArrowRight') next = (index + 1) % count;
    if (e.key === 'ArrowLeft') next = (index - 1 + count) % count;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = count - 1;
    if (next !== index) {
      e.preventDefault();
      setActiveFilter(allTags[next]);
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {/* Section Heading */}
          <h2 
            className={`text-4xl font-semibold text-gray-900 dark:text-gray-200 mb-6 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Featured Projects
          </h2>
          
          {/* Decorative line */}
          <div 
            className={`w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '400ms' }}
            aria-hidden="true"
          />
          
          {/* Section description */}
          <p 
            className={`text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Here are some of my data analysis projects that showcase my ability to extract insights from complex datasets and create meaningful visualizations.
          </p>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4">
                <label htmlFor="sortBy" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sort by:
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="recent">Most Recent</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="tech">Technology Count</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {activeFilter !== 'All' && ` in ${activeFilter}`}
            </p>
          </div>

          {/* Filter Tabs */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-12 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
            role="tablist"
            aria-label="Project filter tabs"
          >
      {allTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-6 py-3 rounded-full font-medium motion-safe:transition-all motion-safe:duration-200 min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                  activeFilter === tag
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
                }`}
                role="tab"
                aria-selected={activeFilter === tag}
                aria-controls="projects-grid"
                tabIndex={activeFilter === tag ? 0 : -1}
        id={`filter-${tag}`}
        onKeyDown={(e) => onTabKeyDown(e, index)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
          <div 
            id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          role="tabpanel"
          aria-labelledby={`filter-${activeFilter}`}
        >
          {filteredAndSortedProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${1000 + (index * 150)}ms` }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                image={project.image}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${1200 + (filteredProjects.length * 150)}ms` }}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              I'm always working on new projects and exploring innovative ways to analyze data. 
              Let's connect and discuss how we can work together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:shadow-xl shadow-lg min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              aria-label="Navigate to contact section"
            >
              <span>Get In Touch</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="https://github.com/shivamoza26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 motion-safe:transition-colors motion-safe:duration-200 min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              aria-label="View all projects on GitHub"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View All Projects
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

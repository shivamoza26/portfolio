import React, { useState, useEffect, useRef, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { skillsData } from '../data/skills';

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

    // Search by term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProjects.length > 0 ? (
            filteredAndSortedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-in-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No projects match your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Technical Overview Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent">
            Technical Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {Object.values(skillsData).flat().length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
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

export default Projects;

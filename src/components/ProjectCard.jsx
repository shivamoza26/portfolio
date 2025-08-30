import React from 'react';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg motion-safe:hover:shadow-xl motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 flex flex-col overflow-hidden">
      {/* Optional Image */}
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <picture>
            <source srcSet={`${image.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`} type="image/webp" />
            <img 
              src={image} 
              alt={`${title} project screenshot`}
              loading="lazy"
              width="400"
              height="225"
              className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-105"
            />
          </picture>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-3">
          {title}
        </h3>
        
        {/* Description - 2 line clamp */}
        <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack Pills */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((technology, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        
        {/* Actions Row - pushed to bottom */}
        <div className="flex gap-3 mt-auto">
          {/* GitHub Link */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 motion-safe:transition-colors motion-safe:duration-200 text-sm font-medium min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              aria-label={`View ${title} source code on GitHub`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          
          {/* Live Demo Link */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 motion-safe:transition-colors motion-safe:duration-200 text-sm font-medium min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              aria-label={`View ${title} live demo`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;

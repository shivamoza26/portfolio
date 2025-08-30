import React, { useState, useEffect } from 'react';
import { testimonials, stats } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = filter === 'featured' 
    ? testimonials.filter(t => t.featured)
    : testimonials;

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % filteredTestimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % filteredTestimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (filteredTestimonials.length === 0) return null;

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What colleagues and clients say about working with me on data science and analytics projects.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stats.totalTestimonials}+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.averageRating}/5
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.companiesWorkedWith}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Companies
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              All Testimonials
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === 'featured'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Auto-play Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              title={isAutoPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1M9 18h6m-7 0h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <path d="M15 85l70-70M85 85L15 15" stroke="currentColor" strokeWidth="0.5"/>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-6xl text-blue-200 dark:text-blue-800 mb-6">
                "
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-8">
                {currentTestimonial.content}
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {renderStars(currentTestimonial.rating)}
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  ({currentTestimonial.rating}/5)
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Project: {currentTestimonial.project}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(currentTestimonial.date)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All Testimonials Grid (Optional) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            All Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 ${
                  index === currentIndex ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  {testimonial.featured && (
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

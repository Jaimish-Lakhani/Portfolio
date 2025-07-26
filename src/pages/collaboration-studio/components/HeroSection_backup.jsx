import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-background py-20 lg:py-32 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Ready to transform your vision into reality? Let's collaborate on building 
              exceptional digital experiences that make a lasting impact.
            </p>

            {/* Simple CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Our Journey
                <Icon name="ArrowRight" className="inline-block w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                View My Work
                <Icon name="ExternalLink" className="inline-block w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;

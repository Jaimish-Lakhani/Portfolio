import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  
  const metrics = [
    { value: "98%", label: "Client Satisfaction", icon: "Heart" },
    { value: "150+", label: "Successful Projects", icon: "CheckCircle" },
    { value: "5+", label: "Years Experience", icon: "Award" },
    { value: "24/7", label: "Support Available", icon: "Clock" }
  ];

  const collaborationValues = [
    { 
      title: "Transparent Communication", 
      description: "Clear, honest, and regular updates throughout the project lifecycle",
      icon: "MessageSquare",
      color: "text-blue-500"
    },
    { 
      title: "Agile Methodology", 
      description: "Flexible, iterative approach that adapts to changing requirements",
      icon: "RefreshCw",
      color: "text-green-500"
    },
    { 
      title: "Quality Assurance", 
      description: "Rigorous testing and code review processes for optimal results",
      icon: "Shield",
      color: "text-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-background py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Advanced floating metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl backdrop-blur-sm border border-white/10 ${
                    activeMetric === index 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-xl scale-105' 
                      : 'bg-white/5 hover:bg-white/10'
                  } transition-all duration-500`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ 
                    scale: activeMetric === index ? 1.05 : 1,
                    y: activeMetric === index ? -5 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon name={metric.icon} className="w-8 h-8 mb-3 text-accent" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your vision into reality? Let's collaborate on building 
              exceptional digital experiences that make a lasting impact.
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Our Journey
                <Icon name="ArrowRight" className="inline-block w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <Icon name="ExternalLink" className="inline-block w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Collaboration Values Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {collaborationValues.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-center">
                <Icon name={value.icon} className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

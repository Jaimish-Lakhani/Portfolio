import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { DraggableCardBody, DraggableCardContainer } from '../../../components/ui/draggable-card';

const DraggableProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);

  // Track document height changes for full page dragging
  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setDocumentHeight(height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    
    // Use MutationObserver to detect DOM changes
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true 
    });

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
      observer.disconnect();
    };
  }, []);

  const handleDoubleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/jaimish-lakhani',
      color: '#0A66C2',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/jaimish-lakhani',
      color: '#333',
      bgColor: 'bg-gray-800'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/jaimish_lakhani',
      color: '#E4405F',
      bgColor: 'bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500'
    },
    {
      name: 'X (Twitter)',
      icon: 'Twitter',
      url: 'https://x.com/jaimish_lakhani',
      color: '#000000',
      bgColor: 'bg-black'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:jaimish.lakhani@example.com',
      color: '#EA4335',
      bgColor: 'bg-red-600'
    }
  ];

  return (
    <DraggableCardContainer 
      className="w-full pointer-events-none"
      style={{ height: `${documentHeight}px` }}
    >
      <DraggableCardBody 
        className="pointer-events-auto"
        initialPosition={{ x: 100, y: 140 }}
      >
        <div 
          className="relative w-full h-full"
          onDoubleClick={handleDoubleClick}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            style={{ 
              transformStyle: 'preserve-3d',
              cursor: 'pointer'
            }}
          >
            {/* Front Side */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Flip icon hint - Front Side */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-3 right-3 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 shadow-lg"
              >
                <Icon name="RefreshCw" size={14} className="text-white" />
              </motion.div>

              {/* Profile Picture Section - 65% of card */}
              <div className="h-[65%] relative overflow-hidden rounded-t-2xl">
                <img
                  src="/assets/images/profile-picture.png"
                  alt="Jaimish S. Lakhani"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              
              {/* Details Section - 35% of card */}
              <div className="h-[35%] bg-background p-6 flex flex-col justify-between rounded-b-2xl">
                {/* Name and Title */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-text-primary mb-2">
                    Jaimish S. Lakhani
                  </h2>
                  <p className="text-text-secondary text-sm mb-3 leading-snug">
                    Full-Stack Developer & Technical Innovator
                  </p>
                  
                  {/* Available status */}
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Icon name="MapPin" size={14} className="text-purple-600" />
                    <span className="text-purple-600 text-sm font-medium">Available for Projects</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">50+</div>
                    <div className="text-sm text-text-secondary">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">5+</div>
                    <div className="text-sm text-text-secondary">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">99%</div>
                    <div className="text-sm text-text-secondary">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-black"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              {/* Flip icon hint - Back Side */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-3 right-3 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-lg"
              >
                <Icon name="RefreshCw" size={14} className="text-white" />
              </motion.div>

              <div className="h-full p-6 flex flex-col justify-center items-center text-white relative">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
                
                {/* Header with Logo */}
                <motion.div 
                  className="text-center mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: isFlipped ? 1 : 0, 
                      rotate: isFlipped ? 0 : -180 
                    }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl"
                  >
                    <span className="text-2xl font-bold text-white">JL</span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFlipped ? 1 : 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    Let's Connect!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFlipped ? 1 : 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-gray-300 text-sm"
                  >
                    Ready to collaborate and build amazing things together
                  </motion.p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="space-y-3 w-full mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFlipped ? 1 : 0 }}
                      transition={{ 
                        delay: 0.7 + index * 0.1, 
                        duration: 0.5
                      }}
                      className="flex items-center space-x-3 bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                    >
                      <div className={`w-10 h-10 ${social.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon name={social.icon} size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{social.name}</div>
                        <div className="text-xs text-gray-400">
                          {social.name === 'Email' ? 'jaimish.lakhani@example.com' : 
                           social.name === 'LinkedIn' ? 'Connect professionally' :
                           social.name === 'GitHub' ? 'View my repositories' :
                           social.name === 'Instagram' ? 'Follow my journey' :
                           social.name === 'X (Twitter)' ? 'Latest updates & thoughts' :
                           'Connect with me'}
                        </div>
                      </div>
                      <Icon name="ExternalLink" size={14} className="text-gray-400" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="text-center border-t border-gray-700/50 pt-4 w-full relative z-10"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-300">San Francisco, CA</span>
                  </div>
                </motion.div>

                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </DraggableCardBody>
    </DraggableCardContainer>
  );
};

export default DraggableProfileCard;

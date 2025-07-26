import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { DraggableCardBody, DraggableCardContainer } from '../../../components/ui/draggable-card';

const DraggableProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Function to open Gmail directly with email pre-filled
  const openGmailCompose = (subject = 'Hello from your Portfolio!') => {
    const email = 'jaimish.work@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
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
      url: 'gmail-compose', // Special identifier for Gmail compose
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
        initialPosition={{ 
          x: isMobile ? 20 : 100, // Closer to left edge on mobile
          y: isMobile ? 100 : 140  // Slightly higher on mobile
        }}
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
                className="absolute top-2 md:top-3 right-2 md:right-3 z-10 bg-black/30 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg"
              >
                <Icon name="RefreshCw" size={12} className="text-white md:w-[14px] md:h-[14px]" />
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
              <div className="h-[35%] bg-background p-4 md:p-6 flex flex-col justify-between rounded-b-2xl">
                {/* Name and Title */}
                <div className="text-center">
                  <h2 className="text-lg md:text-2xl font-bold text-text-primary mb-1 md:mb-2">
                    Jaimish S. Lakhani
                  </h2>
                  <p className="text-text-secondary text-xs md:text-sm mb-2 md:mb-3 leading-snug">
                    Backend Engineer & Microservices Architect
                  </p>
                  
                  {/* Available status */}
                  <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-2 md:mb-4">
                    <Icon name="MapPin" size={12} className="text-purple-600 md:w-[14px] md:h-[14px]" />
                    <span className="text-purple-600 text-xs md:text-sm font-medium">Available for Projects</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-border pt-2 md:pt-4">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-text-primary">50+</div>
                    <div className="text-xs md:text-sm text-text-secondary">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-text-primary">5+</div>
                    <div className="text-xs md:text-sm text-text-secondary">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-text-primary">99%</div>
                    <div className="text-xs md:text-sm text-text-secondary">Client Satisfaction</div>
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
                className="absolute top-2 md:top-3 right-2 md:right-3 z-20 bg-white/20 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg"
              >
                <Icon name="RefreshCw" size={12} className="text-white md:w-[14px] md:h-[14px]" />
              </motion.div>

              <div className="h-full p-3 md:p-6 flex flex-col text-white relative">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
                
                {/* Download Resume Button - Bottom Right */}
                <motion.a
                  href="/assets/Jaimish-Lakhani-Resume.pdf"
                  download="Jaimish-Lakhani-Resume.pdf"
                  title="Download Resume"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isFlipped ? 1 : 0,
                    scale: isFlipped ? 1 : 0 
                  }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                  className="absolute bottom-3 md:bottom-6 right-3 md:right-6 z-20 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 group"
                >
                  <Icon name="Download" size={16} className="text-white md:w-[20px] md:h-[20px] group-hover:animate-bounce" />
                </motion.a>
                
                {/* Main Content - Left Aligned */}
                <div className="flex-1 flex flex-col justify-center items-start pl-0 md:pl-4">
                
                {/* Header with Logo */}
                <motion.div 
                  className="text-left mb-4 md:mb-6 relative z-10"
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
                    className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 md:mb-4 shadow-2xl"
                  >
                    <span className="text-lg md:text-2xl font-bold text-white">JL</span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFlipped ? 1 : 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-lg md:text-xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    Let's Connect!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFlipped ? 1 : 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-gray-300 text-xs md:text-sm"
                  >
                    Ready to collaborate and build amazing things together
                  </motion.p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="space-y-2 md:space-y-3 w-full mb-3 md:mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {socialLinks.map((social, index) => {
                    // Handle Gmail compose specially
                    if (social.url === 'gmail-compose') {
                      return (
                        <motion.button
                          key={social.name}
                          onClick={() => openGmailCompose()}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isFlipped ? 1 : 0 }}
                          transition={{ 
                            delay: 0.7 + index * 0.1, 
                            duration: 0.5
                          }}
                          className="flex items-center space-x-2 md:space-x-3 bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600 rounded-xl p-2 md:p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm w-full text-left"
                        >
                          <div className={`w-8 h-8 md:w-10 md:h-10 ${social.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                            <Icon name={social.icon} size={14} className="text-white md:w-[18px] md:h-[18px]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white text-sm md:text-base">{social.name}</div>
                            <div className="text-xs text-gray-400 hidden md:block">
                              jaimish.work@gmail.com
                            </div>
                          </div>
                        </motion.button>
                      );
                    }
                    
                    // Regular social links
                    return (
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
                        className="flex items-center space-x-2 md:space-x-3 bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-gray-600 rounded-xl p-2 md:p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                      >
                        <div className={`w-8 h-8 md:w-10 md:h-10 ${social.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                          <Icon name={social.icon} size={14} className="text-white md:w-[18px] md:h-[18px]" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white text-sm md:text-base">{social.name}</div>
                          <div className="text-xs text-gray-400 hidden md:block">
                            {social.name === 'LinkedIn' ? 'Connect professionally' :
                             social.name === 'GitHub' ? 'View my repositories' :
                             social.name === 'Instagram' ? 'Follow my journey' :
                             social.name === 'X (Twitter)' ? 'Latest updates & thoughts' :
                             'Connect with me'}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="text-left border-t border-gray-700/50 pt-2 md:pt-4 w-full relative z-10"
                >
                  <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={10} className="text-white md:w-[12px] md:h-[12px]" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={10} className="text-white md:w-[12px] md:h-[12px]" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-300">San Francisco, CA</span>
                  </div>
                </motion.div>
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

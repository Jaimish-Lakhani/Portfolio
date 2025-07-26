import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const VanishTextarea = forwardRef(({ 
  value, 
  onChange, 
  onVanish, 
  placeholder, 
  className, 
  ...props 
}, ref) => {
  const [isVanishing, setIsVanishing] = useState(false);
  const textareaRef = useRef(null);

  const triggerVanish = () => {
    if (!value || !value.trim()) return;
    
    setIsVanishing(true);
    
    // Call the onVanish callback after animation
    setTimeout(() => {
      onVanish && onVanish();
      setIsVanishing(false);
    }, 800);
  };

  // Expose triggerVanish method to parent component
  useImperativeHandle(ref, () => ({
    triggerVanish
  }));

  return (
    <div className="relative">
      <motion.textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "input-field w-full resize-none transition-all duration-300",
          isVanishing && "text-transparent",
          className
        )}
        animate={{
          opacity: isVanishing ? 0 : 1,
          scale: isVanishing ? 0.95 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        {...props}
      />
      
      {/* Particle effect overlay */}
      {isVanishing && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              initial={{
                x: Math.random() * 400,
                y: Math.random() * 100,
                opacity: 1,
              }}
              animate={{
                x: Math.random() * 400 + 100,
                y: Math.random() * 100 - 50,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.02,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
});

VanishTextarea.displayName = 'VanishTextarea';

export default VanishTextarea;

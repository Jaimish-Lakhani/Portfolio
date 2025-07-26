import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'contexts/ThemeContext';

const ThemeToggle = ({ className = "", size = "md" }) => {
  const { theme, toggleTheme, isDark, currentTheme } = useTheme();

  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-10 h-10 p-2",
    lg: "w-12 h-12 p-2.5"
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  // Get the appropriate icon and next theme info
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return { Icon: Sun, next: 'dark', label: 'Switch to dark mode' };
      case 'dark': return { Icon: Moon, next: 'light', label: 'Switch to light mode' };
      default: return { Icon: Sun, next: 'dark', label: 'Switch to dark mode' };
    }
  };

  const { Icon, next, label } = getThemeIcon();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative rounded-lg border border-primary-200 
        bg-background hover:bg-primary-50 
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        group overflow-hidden
        ${sizeClasses[size]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-surface"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          <Icon 
            size={iconSizes[size]} 
            className={`transition-colors duration-200 ${
              theme === 'light' ? 'text-orange-500 group-hover:text-orange-600' :
              theme === 'dark' ? 'text-violet-400 group-hover:text-violet-300' :
              'text-slate-700 group-hover:text-slate-800'
            }`}
            strokeWidth={2}
          />
        </motion.div>
      </div>

      {/* Subtle border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg border border-accent/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Theme indicator tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        <div className="bg-background border border-surface-secondary rounded-md px-2 py-1 text-xs text-text-primary whitespace-nowrap shadow-lg">
          {currentTheme?.displayName || theme}
        </div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;

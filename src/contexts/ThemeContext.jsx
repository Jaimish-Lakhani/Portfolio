import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme configuration - Pure Black Background with Purple Accents
const THEMES = {
  light: {
    name: 'light',
    displayName: 'Light Mode',
    colors: {
      primary: '#720e9e', // Purple accent color
      'primary-50': '#E6E6FA', // Lavender for light elements
      'primary-100': '#E6E6FA',
      'primary-200': '#E6E6FA',
      'primary-300': '#E6E6FA',
      'primary-400': '#720e9e',
      'primary-500': '#720e9e',
      'primary-600': '#720e9e',
      'primary-700': '#720e9e',
      'primary-foreground': '#FFFFFF', // White text
      background: '#000000', // Pure black background
      'text-primary': '#FFFFFF', // White text
      'text-secondary': '#E6E6FA' // Light lavender for secondary text
    }
  },
  dark: {
    name: 'dark',
    displayName: 'Dark Mode',
    colors: {
      primary: '#720e9e', // Purple accent color
      'primary-50': '#E6E6FA', // Lavender for light elements
      'primary-100': '#E6E6FA',
      'primary-200': '#E6E6FA',
      'primary-300': '#E6E6FA',
      'primary-400': '#720e9e',
      'primary-500': '#720e9e',
      'primary-600': '#720e9e',
      'primary-700': '#720e9e',
      'primary-foreground': '#FFFFFF', // White text
      background: '#000000', // Pure black background
      'text-primary': '#FFFFFF', // White text
      'text-secondary': '#E6E6FA' // Light lavender for secondary text
    }
  }
};

// Create the context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on mount with fallback
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme && THEMES[savedTheme]) {
        setTheme(savedTheme);
      } else {
        // Use system preference if no saved theme
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      setTheme('light'); // Fallback to light mode
    }
  }, []);

  // Apply theme to document root and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-light', 'theme-dark', 'dark', 'light');
    
    // Add current theme classes (both for legacy and new support)
    root.classList.add(`theme-${theme}`, theme);
    
    // Apply additional attributes for accessibility
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [theme]);

  // Toggle between light and dark themes only
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Cycle between light and dark only
  const toggleLightDark = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Set specific theme
  const setCurrentTheme = (newTheme) => {
    if (THEMES[newTheme]) {
      setTheme(newTheme);
    }
  };

  const value = {
    theme,
    themes: THEMES,
    currentTheme: THEMES[theme],
    toggleTheme,
    toggleLightDark: toggleTheme, // Same as toggleTheme now
    setTheme: setCurrentTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

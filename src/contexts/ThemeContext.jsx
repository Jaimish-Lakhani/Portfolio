import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme configuration
const THEMES = {
  light: {
    name: 'light',
    displayName: 'Light Mode',
    colors: {
      primary: '#1E293B',
      'primary-50': '#F8FAFC',
      'primary-100': '#F1F5F9',
      'primary-200': '#E2E8F0',
      'primary-300': '#CBD5E1',
      'primary-400': '#94A3B8',
      'primary-500': '#64748B',
      'primary-600': '#475569',
      'primary-700': '#334155',
      'primary-foreground': '#F8FAFC',
      background: '#F8FAFC',
      'text-primary': '#0F172A',
      'text-secondary': '#64748B'
    }
  },
  dark: {
    name: 'dark',
    displayName: 'Dark Mode',
    colors: {
      primary: '#F8FAFC',
      'primary-50': '#1E293B',
      'primary-100': '#334155',
      'primary-200': '#475569',
      'primary-300': '#64748B',
      'primary-400': '#94A3B8',
      'primary-500': '#CBD5E1',
      'primary-600': '#E2E8F0',
      'primary-700': '#F1F5F9',
      'primary-foreground': '#1E293B',
      background: '#0F172A',
      'text-primary': '#F8FAFC',
      'text-secondary': '#CBD5E1'
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

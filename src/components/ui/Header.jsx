import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/dynamic-homepage', icon: 'Home' },
    { name: 'Projects', path: '/project-showcase-galaxy', icon: 'Folder' },
    { name: 'Journey', path: '/professional-journey-hub', icon: 'MapPin' },
    { name: 'Skills', path: '/technical-mastery-center', icon: 'Code' },
    { name: 'Collaborate', path: '/collaboration-studio', icon: 'Users' },
    { name: 'Network', path: '/professional-network', icon: 'Globe' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-background shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Icon name="Code" size={16} className="text-white" />
            </div>
            <span className="font-bold text-text-primary">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent-50 shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-accent' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>

          {/* CTA Button, Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle size="md" className="hidden sm:flex" />
            
            <Button
              variant="primary"
              size="sm"
              className="hidden md:flex"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.location.href = '/collaboration-studio'}
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-xl transition-all duration-200 border shadow-sm active:scale-95 ${
                isMenuOpen 
                  ? 'text-white bg-accent border-accent-400 shadow-lg' 
                  : 'text-text-primary hover:text-white hover:bg-accent border-border bg-surface'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={22} 
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-background animate-slide-in-top">
            {/* Header space */}
            <div className="h-14 sm:h-16 bg-background border-b border-border">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon 
                    name="Home" 
                    size={18} 
                    className="text-accent" 
                  />
                  <span className="font-bold text-text-primary">Portfolio</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-xl text-text-primary hover:text-white hover:bg-accent transition-all duration-200 active:scale-95"
                >
                  <Icon name="X" size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 px-4 py-6 overflow-y-auto">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex items-center space-x-4 px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 animate-slide-in-left ${
                      isActivePath(item.path)
                        ? 'text-white bg-accent shadow-xl scale-[1.02] border border-accent-400'
                        : 'text-text-primary hover:text-white hover:bg-accent/80 hover:scale-[1.01]'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-200 ${
                      isActivePath(item.path) 
                        ? 'bg-white/20 shadow-sm' 
                        : 'bg-surface group-hover:bg-accent/20'
                    }`}>
                      <Icon 
                        name={item.icon} 
                        size={20} 
                        className={isActivePath(item.path) ? 'text-white' : 'text-accent'}
                      />
                    </div>
                    <span className="flex-1">{item.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="mt-8 pt-6 border-t border-border space-y-4 animate-slide-in-bottom">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between px-6 py-4 bg-surface rounded-xl border border-border hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon name="Palette" size={18} className="text-accent" />
                    </div>
                    <span className="font-medium text-text-primary">Theme</span>
                  </div>
                  <ThemeToggle size="md" />
                </div>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="!py-4 !text-lg !font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200"
                  onClick={() => {
                    closeMenu();
                    window.location.href = '/collaboration-studio';
                  }}
                >
                  Start Collaboration
                </Button>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-4 bg-surface rounded-xl border border-border hover:shadow-md transition-all duration-200">
                    <div className="text-2xl font-bold text-accent mb-1">50+</div>
                    <div className="text-sm text-text-secondary">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-xl border border-border hover:shadow-md transition-all duration-200">
                    <div className="text-2xl font-bold text-accent mb-1">30+</div>
                    <div className="text-sm text-text-secondary">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
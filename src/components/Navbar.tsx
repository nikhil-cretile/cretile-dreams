
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from './ui/switch';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cretile-blue to-cretile-yellow bg-clip-text text-transparent dark:from-cretile-yellow dark:to-cretile-blue">Cretile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                isActive('/') 
                  ? 'text-cretile-blue dark:text-cretile-yellow after:w-full' 
                  : 'text-gray-800 dark:text-gray-200 after:w-0'
              } hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cretile-blue dark:after:bg-cretile-yellow after:transition-all after:duration-300 hover:after:w-full`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`${
                isActive('/products') 
                  ? 'text-cretile-blue dark:text-cretile-yellow after:w-full' 
                  : 'text-gray-800 dark:text-gray-200 after:w-0'
              } hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cretile-blue dark:after:bg-cretile-yellow after:transition-all after:duration-300 hover:after:w-full`}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className={`${
                isActive('/services') 
                  ? 'text-cretile-blue dark:text-cretile-yellow after:w-full' 
                  : 'text-gray-800 dark:text-gray-200 after:w-0'
              } hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cretile-blue dark:after:bg-cretile-yellow after:transition-all after:duration-300 hover:after:w-full`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`${
                isActive('/projects') 
                  ? 'text-cretile-blue dark:text-cretile-yellow after:w-full' 
                  : 'text-gray-800 dark:text-gray-200 after:w-0'
              } hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cretile-blue dark:after:bg-cretile-yellow after:transition-all after:duration-300 hover:after:w-full`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`${
                isActive('/blog') 
                  ? 'text-cretile-blue dark:text-cretile-yellow after:w-full' 
                  : 'text-gray-800 dark:text-gray-200 after:w-0'
              } hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cretile-blue dark:after:bg-cretile-yellow after:transition-all after:duration-300 hover:after:w-full`}
            >
              Blog
            </Link>
            <a 
              href="/#contact" 
              className="py-2 px-4 rounded-md bg-gradient-to-r from-cretile-blue to-cretile-blue/90 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:from-cretile-yellow dark:to-cretile-yellow/90 dark:text-gray-900"
            >
              Contact Us
            </a>
            
            {/* Theme toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <Sun size={16} className={`${theme === 'light' ? 'text-cretile-yellow' : 'text-gray-400'}`} />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-cretile-blue dark:data-[state=checked]:bg-cretile-yellow"
              />
              <Moon size={16} className={`${theme === 'dark' ? 'text-cretile-blue' : 'text-gray-400'}`} />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme toggle for mobile */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <Sun size={14} className={`mr-1 ${theme === 'light' ? 'text-cretile-yellow' : 'text-gray-400'}`} />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-cretile-blue dark:data-[state=checked]:bg-cretile-yellow"
              />
              <Moon size={14} className={`ml-1 ${theme === 'dark' ? 'text-cretile-blue' : 'text-gray-400'}`} />
            </div>
            
            <button 
              className="text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cretile-blue dark:focus:ring-cretile-yellow rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link to="/" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium py-2 border-b border-gray-100 dark:border-gray-800">Home</Link>
          <Link to="/products" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium py-2 border-b border-gray-100 dark:border-gray-800">Products</Link>
          <Link to="/services" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium py-2 border-b border-gray-100 dark:border-gray-800">Services</Link>
          <Link to="/projects" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium py-2 border-b border-gray-100 dark:border-gray-800">Projects</Link>
          <Link to="/blog" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium py-2 border-b border-gray-100 dark:border-gray-800">Blog</Link>
          <a href="/#contact" className="block w-full text-center py-3 bg-cretile-blue text-white rounded-md dark:bg-cretile-yellow dark:text-gray-900">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

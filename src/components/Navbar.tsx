
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-cretile-blue dark:text-cretile-yellow">Cretile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-cretile-blue dark:text-cretile-yellow' : 'text-gray-800 dark:text-gray-200'} hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`${isActive('/products') ? 'text-cretile-blue dark:text-cretile-yellow' : 'text-gray-800 dark:text-gray-200'} hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors`}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-cretile-blue dark:text-cretile-yellow' : 'text-gray-800 dark:text-gray-200'} hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`${isActive('/projects') ? 'text-cretile-blue dark:text-cretile-yellow' : 'text-gray-800 dark:text-gray-200'} hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog') ? 'text-cretile-blue dark:text-cretile-yellow' : 'text-gray-800 dark:text-gray-200'} hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium transition-colors`}
            >
              Blog
            </Link>
            <a href="/#contact" className="btn-primary dark:bg-cretile-yellow dark:text-gray-900">Contact Us</a>
            
            {/* Theme toggle */}
            <div className="flex items-center space-x-2">
              <Sun size={18} className="text-cretile-yellow dark:text-gray-400" />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-cretile-blue dark:data-[state=checked]:bg-cretile-yellow"
              />
              <Moon size={18} className="text-gray-400 dark:text-cretile-blue" />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme toggle for mobile */}
            <div className="flex items-center">
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-cretile-blue dark:data-[state=checked]:bg-cretile-yellow"
              />
            </div>
            
            <button 
              className="text-gray-800 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link to="/" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/services" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/blog" className="block text-gray-800 dark:text-gray-200 hover:text-cretile-blue dark:hover:text-cretile-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <a href="/#contact" className="btn-primary dark:bg-cretile-yellow dark:text-gray-900 inline-block" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

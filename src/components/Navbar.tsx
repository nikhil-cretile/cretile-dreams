
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-cretile-blue">Cretile</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-cretile-blue font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-800 hover:text-cretile-blue font-medium transition-colors">Products</a>
            <a href="#services" className="text-gray-800 hover:text-cretile-blue font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-800 hover:text-cretile-blue font-medium transition-colors">Projects</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#home" className="block text-gray-800 hover:text-cretile-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" className="block text-gray-800 hover:text-cretile-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#services" className="block text-gray-800 hover:text-cretile-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" className="block text-gray-800 hover:text-cretile-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="btn-primary inline-block" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Services from '../components/Services';
import StemEducation from '../components/StemEducation';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RollingProjects from '../components/RollingProjects';
import Blog from '../components/Blog';

const Index = () => {
  useEffect(() => {
    // Enhanced Intersection Observer with options for better animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    // Target all elements with the slide-in-section class
    document.querySelectorAll('.slide-in-section').forEach((el) => {
      observer.observe(el);
    });

    // Target all elements with the staggered-fade-in class
    document.querySelectorAll('.staggered-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.slide-in-section').forEach((el) => {
        observer.unobserve(el);
      });
      document.querySelectorAll('.staggered-fade-in').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <RollingProjects />
      <Features />
      <StemEducation />
      <Products />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

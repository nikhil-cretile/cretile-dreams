
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

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RollingProjects />
      <Features />
      <StemEducation />
      <Products />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

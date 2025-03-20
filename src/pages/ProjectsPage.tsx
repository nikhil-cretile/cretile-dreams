
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import ProjectHero from '../components/projects/ProjectHero';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import OtherProjects from '../components/projects/OtherProjects';
import CaseStudies from '../components/projects/CaseStudies';
import VideoShowcase from '../components/projects/VideoShowcase';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import { featuredProjects, otherProjects, caseStudies } from '../data/projectsData';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.slide-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.slide-in-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        <ProjectHero />
        <FeaturedProjects projects={featuredProjects} />
        <OtherProjects projects={otherProjects} />
        <CaseStudies caseStudies={caseStudies} />
        <VideoShowcase />
        <ProjectsCTA />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;

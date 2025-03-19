
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      image: "https://placehold.co/800x500/cretile-blue/white?text=Project+1",
      title: "Smart City Initiative",
      description: "Students created miniature smart city models using sensors to monitor traffic, energy usage, and environmental factors.",
      location: "Franklin STEM Academy",
      age: "14-16 years"
    },
    {
      image: "https://placehold.co/800x500/cretile-yellow/white?text=Project+2",
      title: "Agricultural Robotics",
      description: "A project focused on automated farming solutions, including irrigation systems and crop monitoring robots.",
      location: "Greenfield High School",
      age: "16-18 years"
    },
    {
      image: "https://placehold.co/800x500/cretile-blue/white?text=Project+3",
      title: "Healthcare Innovations",
      description: "Students developed assistive robots designed to help with healthcare monitoring and mobility support.",
      location: "Medical Preparatory School",
      age: "15-17 years"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Success <span className="text-cretile-blue">Stories</span></h2>
          <p className="section-subheading">Explore innovative projects created by students and educators using Cretile robotics kits</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 bg-white flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                        {project.location}
                      </span>
                      <span className="px-3 py-1 bg-cretile-yellow/20 text-cretile-blue rounded-full text-sm font-medium">
                        Age: {project.age}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* Dots indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-cretile-blue w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

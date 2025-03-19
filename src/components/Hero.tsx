
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation on load
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cretile-yellow/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cretile-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heroRef} className="staggered-fade-in flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div>
              <span className="inline-block px-3 py-1 bg-cretile-yellow/20 text-cretile-blue rounded-full text-sm font-medium mb-4">
                Innovative STEM Education Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transform Education With <span className="text-cretile-blue">Cutting-Edge</span> <span className="text-cretile-yellow">Robotics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Bridge theory with practice through hands-on robotics kits that empower students to learn coding, electronics, and engineering principles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#products" className="btn-primary">
                Explore Solutions <ArrowRight className="inline ml-2" size={16} />
              </a>
              <a href="#contact" className="btn-outline border-cretile-yellow text-cretile-yellow hover:bg-cretile-yellow hover:text-white">
                Partner With Us
              </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-8 justify-center md:justify-start">
              <div>
                <p className="text-3xl font-bold text-cretile-blue">500+</p>
                <p className="text-sm text-gray-600">Partner Institutions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cretile-yellow">50k+</p>
                <p className="text-sm text-gray-600">Students Impacted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cretile-blue">94%</p>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cretile-blue/20 to-cretile-yellow/20 rounded-full filter blur-xl animate-pulse"></div>
              <img 
                src="https://placehold.co/600x400/3770B5/white?text=Robotics+Kit" 
                alt="Cretile Robotics Kit" 
                className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-cretile-yellow p-4 rounded-full shadow-lg z-20 animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-bold text-gray-900">Future-Ready Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f9fafb" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,245.3C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;


import React, { useEffect, useRef } from 'react';
import { Graduation, Target, Users, Rocket } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: <Graduation className="w-10 h-10 text-white" />,
      title: "STEM Curriculum Development",
      description: "Customized educational content aligned with national standards for schools and educational institutions."
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Training Programs",
      description: "Professional development for educators to effectively integrate robotics into their teaching methodologies."
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Workshop Facilitation",
      description: "Engaging, hands-on workshops for students of all ages to build confidence and skills in robotics."
    },
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: "Tech Competitions",
      description: "Organizing and sponsoring robotics competitions to foster innovation and team collaboration."
    }
  ];

  return (
    <section id="services" className="py-20 bg-cretile-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our <span className="text-cretile-yellow">Services</span></h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            We provide comprehensive support for educators, students, and institutions looking to enhance their STEM programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="slide-in-section bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cretile-blue rounded-xl shadow-lg">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Request Service Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

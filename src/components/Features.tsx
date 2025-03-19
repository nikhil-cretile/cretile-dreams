
import React, { useEffect, useRef } from 'react';
import { Code, Zap, BookOpen, Puzzle } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: <Puzzle className="w-10 h-10 text-cretile-blue" />,
      title: "Plug & Play",
      description: "No technical expertise required. Our kits are designed for easy assembly and immediate engagement."
    },
    {
      icon: <Code className="w-10 h-10 text-cretile-blue" />,
      title: "Coding Made Simple",
      description: "Intuitive programming interfaces that make learning to code accessible for all age groups."
    },
    {
      icon: <Zap className="w-10 h-10 text-cretile-blue" />,
      title: "Real-World Applications",
      description: "Projects that connect STEM concepts to practical, everyday challenges and solutions."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-cretile-blue" />,
      title: "Comprehensive Learning",
      description: "Curriculum-aligned materials that support both educators and self-directed learners."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Why Choose <span className="text-cretile-blue">Cretile</span>?</h2>
          <p className="section-subheading">Our approach to STEM education combines innovation, accessibility, and hands-on learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="slide-in-section feature-card flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-cretile-blue/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const testimonials = [
    {
      quote: "Cretile's robotics kits have transformed our STEM program. Students who previously showed little interest in science are now our most enthusiastic participants.",
      name: "Dr. Sarah Johnson",
      title: "Science Department Head",
      school: "Westview Middle School"
    },
    {
      quote: "As a parent, I've seen my daughter's confidence and problem-solving abilities grow tremendously since she started using Cretile's products. The kits are intuitive yet challenging.",
      name: "Michael Rodriguez",
      title: "Parent",
      school: "HomeSTEM Educator"
    },
    {
      quote: "The customer support and educational resources provided by Cretile are exceptional. They don't just sell products; they create a community of learners.",
      name: "Emma Thompson",
      title: "Technology Instructor",
      school: "Brighton Academy"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">What People <span className="text-cretile-blue">Say</span></h2>
          <p className="section-subheading">Hear from educators, parents, and students who have experienced the impact of our products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="slide-in-section bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-cretile-yellow">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v6a6 6 0 1 1-6 6v-2a4 4 0 0 0 4-4h-4V8h6zm12 0v6a6 6 0 1 1-6 6v-2a4 4 0 0 0 4-4h-4V8h6z"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cretile-blue text-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}, {testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

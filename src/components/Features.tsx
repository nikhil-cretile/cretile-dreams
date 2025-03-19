
import React, { useEffect, useRef } from 'react';
import { Code, Zap, BookOpen, Puzzle, Award, Shield, BarChart, Clock } from 'lucide-react';

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
      title: "Plug & Play Integration",
      description: "No technical expertise required. Our kits are designed for seamless incorporation into existing curricula."
    },
    {
      icon: <Code className="w-10 h-10 text-cretile-blue" />,
      title: "Progressive Learning Path",
      description: "Structured curriculum that builds skills incrementally, suitable for all experience levels."
    },
    {
      icon: <Zap className="w-10 h-10 text-cretile-blue" />,
      title: "Real-World Applications",
      description: "Projects that connect STEM concepts to practical, industry-relevant challenges and solutions."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-cretile-blue" />,
      title: "Comprehensive Resources",
      description: "Curriculum-aligned materials with teacher guides, assessment tools, and technical support."
    }
  ];

  const institutionalFeatures = [
    {
      icon: <Award className="w-10 h-10 text-cretile-blue" />,
      title: "Certification Programs",
      description: "Official credentials for students and educators to validate STEM proficiency."
    },
    {
      icon: <Shield className="w-10 h-10 text-cretile-blue" />,
      title: "Enterprise Support",
      description: "Dedicated account managers and technical specialists for institutional partners."
    },
    {
      icon: <BarChart className="w-10 h-10 text-cretile-blue" />,
      title: "Outcomes Measurement",
      description: "Sophisticated analytics to track educational impact and student progress."
    },
    {
      icon: <Clock className="w-10 h-10 text-cretile-blue" />,
      title: "Future-Proof Updates",
      description: "Regular curriculum updates to remain aligned with emerging technologies and industry trends."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Why Institutions Choose <span className="text-cretile-blue">Cretile</span></h2>
          <p className="section-subheading">Our comprehensive approach to STEM education delivers measurable outcomes for educational partners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="slide-in-section mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Exclusive <span className="text-cretile-blue">Institutional Benefits</span></h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Special features designed specifically for our educational partners to maximize program success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutionalFeatures.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index + features.length] = el)}
              className="slide-in-section feature-card flex flex-col items-center text-center"
              style={{ transitionDelay: `${(index + features.length) * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-cretile-blue/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="slide-in-section mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-cretile-blue">Trusted by Leading Educational Institutions</h3>
              <p className="text-gray-700 mb-4">
                Cretile robotics solutions are implemented in top schools, universities, and educational organizations worldwide, delivering proven results in STEM education excellence.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Improved standardized test scores
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Increased STEM program enrollment
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Enhanced technical skill development
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Higher student engagement metrics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Better college acceptance rates
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-cretile-blue">✓</span> Positive parent and student feedback
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/3770B5/white?text=Partner+Logos" 
                alt="Partner Institutions" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

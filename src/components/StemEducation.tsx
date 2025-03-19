
import React, { useEffect, useRef } from 'react';
import { BookOpen, Brain, Lightbulb, GitBranch, Code, Sparkles, Zap, Award, Users } from 'lucide-react';

const StemEducation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    contentRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      contentRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const benefits = [
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "Critical Thinking",
      description: "Develop analytical problem-solving skills essential for innovation and technological advancement."
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: "Coding & Logic",
      description: "Build computational thinking that prepares students for the digital economy and future careers."
    },
    {
      icon: <GitBranch className="w-10 h-10 text-white" />,
      title: "Engineering Mindset",
      description: "Foster design thinking and iterative development approaches to real-world challenges."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "Future-Ready Skills",
      description: "Prepare students with the adaptability and technical literacy required for tomorrow's workforce."
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap size={24} className="text-cretile-yellow" />,
      title: "Curriculum Integration",
      description: "Seamlessly integrates with existing educational frameworks and national standards"
    },
    {
      icon: <Award size={24} className="text-cretile-yellow" />,
      title: "Practical Application",
      description: "Bridges theory and practice through engaging, hands-on learning experiences"
    },
    {
      icon: <Users size={24} className="text-cretile-yellow" />,
      title: "Multi-Level Learning",
      description: "Adaptable content suitable for different age groups and proficiency levels"
    }
  ];

  return (
    <section id="stem-education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">The Power of <span className="text-cretile-blue">STEM</span> <span className="text-cretile-yellow">Education</span></h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Science, Technology, Engineering, and Mathematics education empowers institutions to develop the innovators, educators, researchers, and leaders of the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div 
            ref={(el) => (contentRefs.current[0] = el)} 
            className="slide-in-section bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-cretile-blue">Why STEM Matters for Educational Institutions</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                In today's rapidly evolving technological landscape, STEM education has become crucial for preparing students for future careers and global challenges.
              </p>
              <p className="text-gray-700">
                Cretile's robotics kits provide a practical, hands-on approach to STEM learning that increases student engagement by up to <span className="font-semibold text-cretile-yellow">68%</span> and improves problem-solving abilities by <span className="font-semibold text-cretile-blue">42%</span> compared to traditional methods.
              </p>
              <p className="text-gray-700">
                Our B2B solutions empower educational institutions to establish cutting-edge STEM programs that attract students, satisfy parents, and prepare graduates for success in the innovation economy.
              </p>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-cretile-blue/10 to-cretile-yellow/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">From the classroom to real-world applications:</h4>
              <ul className="space-y-2">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-cretile-blue">{feature.icon}</div>
                    <div>
                      <span className="font-medium">{feature.title}:</span> {feature.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            ref={(el) => (contentRefs.current[1] = el)} 
            className="slide-in-section grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ transitionDelay: "0.2s" }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className={`p-3 ${index % 2 === 0 ? "bg-cretile-blue" : "bg-cretile-yellow"} rounded-xl shadow-lg mb-4`}>
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={(el) => (contentRefs.current[2] = el)} 
          className="slide-in-section bg-gradient-to-r from-cretile-blue to-cretile-blue/80 text-white p-8 md:p-12 rounded-2xl shadow-xl"
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bridging The STEM Skills Gap</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-cretile-yellow rounded-full p-1 mr-3 mt-1">
                    <Lightbulb className="w-4 h-4 text-cretile-blue" />
                  </div>
                  <p>By 2031, STEM careers are projected to grow by 10.5%, outpacing non-STEM jobs.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-cretile-yellow rounded-full p-1 mr-3 mt-1">
                    <Lightbulb className="w-4 h-4 text-cretile-blue" />
                  </div>
                  <p>78% of business leaders report difficulty finding employees with adequate STEM skills.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-cretile-yellow rounded-full p-1 mr-3 mt-1">
                    <Lightbulb className="w-4 h-4 text-cretile-blue" />
                  </div>
                  <p>Educators equipped with the right tools can bridge this gap through early, engaging STEM experiences.</p>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-block bg-cretile-yellow text-cretile-blue font-medium px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Partner With Us
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-video relative z-10 rounded-xl overflow-hidden shadow-lg border-2 border-cretile-yellow">
                <img 
                  src="https://placehold.co/800x450/3770B5/white?text=STEM+Education+Statistics" 
                  alt="STEM Education Statistics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cretile-yellow p-3 rounded-lg shadow-lg z-20">
                <p className="text-sm font-bold text-cretile-blue">Prepare for tomorrow, today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemEducation;


import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from './ui/badge';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      productRefs.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, []);

  const products = [
    {
      image: "https://placehold.co/600x400/3770B5/white?text=Robot+Kit+1",
      title: "Educational Robotics Kit",
      description: "Perfect for institutions looking to introduce fundamental coding and robotics concepts through hands-on learning.",
      price: "$1,499",
      features: [
        "10 complete robotic kits",
        "Comprehensive learning materials",
        "Teacher training program",
        "Technical support"
      ],
      target: "K-12 Schools",
      color: "blue"
    },
    {
      image: "https://placehold.co/600x400/FFD036/dark?text=Robot+Kit+2",
      title: "Advanced Robotics Lab",
      description: "Complete lab setup featuring advanced sensors, motors, and complex programming capabilities for technical education.",
      price: "$3,499",
      features: [
        "20 advanced robotic systems",
        "Curriculum-aligned projects",
        "Professional development",
        "Assessment tools"
      ],
      target: "High Schools & Universities",
      color: "yellow"
    },
    {
      image: "https://placehold.co/600x400/3770B5/white?text=Robot+Kit+3",
      title: "Enterprise STEM Solution",
      description: "Designed for large educational institutions, includes comprehensive teaching materials and ongoing support.",
      price: "$8,999",
      features: [
        "50+ modular robotic kits",
        "Custom curriculum development",
        "Multi-year support package",
        "Regular upgrades"
      ],
      target: "School Districts & Colleges",
      color: "blue"
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Institutional <span className="text-cretile-blue">STEM</span> <span className="text-cretile-yellow">Solutions</span></h2>
          <p className="section-subheading">Comprehensive B2B robotics packages designed for educational institutions at every level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el)}
              className="slide-in-section product-card flex flex-col h-full"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute top-3 right-3 ${product.color === 'blue' ? 'bg-cretile-blue text-white' : 'bg-cretile-yellow text-black'} text-sm font-medium px-3 py-1 rounded-full`}>
                  {product.target}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mt-auto">
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className={`mr-2 mt-1 ${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-bold text-xl`}>{product.price}</span>
                    <a href="#contact" className={`${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-medium hover:underline flex items-center`}>
                      Request Quote <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Looking for a custom solution? We offer tailored packages based on your institution's needs.</p>
          <a href="#contact" className="btn-primary">
            Request Custom Solution <ArrowRight className="inline ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

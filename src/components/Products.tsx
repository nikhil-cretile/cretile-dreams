
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      image: "https://placehold.co/600x400/cretile-blue/white?text=Robot+Kit+1",
      title: "Basic Robotics Kit",
      description: "Perfect for beginners, this kit introduces fundamental robotics concepts and basic programming.",
      price: "$99.99",
      ageGroup: "8-12 years"
    },
    {
      image: "https://placehold.co/600x400/cretile-yellow/white?text=Robot+Kit+2",
      title: "Advanced Robotics Kit",
      description: "For experienced builders, featuring sensors, motors, and complex programming capabilities.",
      price: "$149.99",
      ageGroup: "12-16 years"
    },
    {
      image: "https://placehold.co/600x400/cretile-blue/white?text=Robot+Kit+3",
      title: "Classroom Bundle",
      description: "Designed for educational institutions, includes 10 kits and comprehensive teaching materials.",
      price: "$899.99",
      ageGroup: "Educational"
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Our <span className="text-cretile-blue">Products</span></h2>
          <p className="section-subheading">Discover our range of innovative robotics kits designed for different age groups and learning levels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el)}
              className="slide-in-section product-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-cretile-yellow text-black text-sm font-medium px-3 py-1 rounded-full">
                  {product.ageGroup}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cretile-blue font-bold text-xl">{product.price}</span>
                  <a href="#" className="text-cretile-blue font-medium hover:underline flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View All Products <ArrowRight className="inline ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

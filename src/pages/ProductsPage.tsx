
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, Download, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '../contexts/ThemeContext';

const ProductsPage = () => {
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

  const educationalProducts = [
    {
      id: 1,
      name: "CretileBot Basic",
      description: "Perfect starter kit for elementary schools to introduce basic robotics and coding concepts.",
      price: "$649",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90JTIwa2l0fGVufDB8fDB8fHww",
      features: [
        "5 programmable robots",
        "Visual block-based programming interface",
        "10 guided lesson plans",
        "Teacher training materials",
        "1-year technical support"
      ],
      level: "Elementary (Grades 3-5)",
      color: "blue"
    },
    {
      id: 2,
      name: "CretileBot Advanced",
      description: "Comprehensive robotics solution for middle schools with sensors and advanced programming capabilities.",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYm90JTIwa2l0fGVufDB8fDB8fHww",
      features: [
        "10 programmable robots with advanced sensors",
        "Text-based and block-based programming",
        "20 cross-curricular project plans",
        "Professional development workshop",
        "2-year technical support and maintenance"
      ],
      level: "Middle School (Grades 6-8)",
      color: "yellow"
    },
    {
      id: 3,
      name: "CretileBot Pro",
      description: "Advanced robotics platform for high schools featuring AI capabilities and real-world applications.",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90JTIwa2l0fGVufDB8fDB8fHww",
      features: [
        "15 advanced robotic systems with AI modules",
        "Python, JavaScript and C++ programming support",
        "30 industry-aligned projects",
        "Advanced teacher certification program",
        "3-year comprehensive support package"
      ],
      level: "High School (Grades 9-12)",
      color: "blue"
    }
  ];

  const institutionalSolutions = [
    {
      id: 4,
      name: "Classroom Robotics Lab",
      description: "Complete classroom setup with robotics stations, curriculum, and teacher training.",
      price: "From $8,499",
      image: "https://images.unsplash.com/photo-1581091007718-0c35df9c477f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnRzJTIwcm9ib3R8ZW58MHx8MHx8fDA%3D",
      features: [
        "30-student capacity",
        "Complete curriculum package",
        "On-site teacher training",
        "Assessment tools",
        "5-year support plan"
      ],
      target: "K-12 Schools & Districts",
      color: "yellow"
    },
    {
      id: 5,
      name: "STEM Competition Package",
      description: "Everything needed to prepare students for robotics competitions and hackathons.",
      price: "From $5,999",
      image: "https://images.unsplash.com/photo-1581091012184-c2068bf1d15c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN0dWRlbnRzJTIwcm9ib3R8ZW58MHx8MHx8fDA%3D",
      features: [
        "Competition-ready robotics kits",
        "Competition preparation curriculum",
        "Coach training program",
        "Competition registration support",
        "Technical support during events"
      ],
      target: "Schools & After-School Programs",
      color: "blue"
    },
    {
      id: 6,
      name: "District-wide STEM Initiative",
      description: "Comprehensive solution for implementing robotics education across an entire school district.",
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHMlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D",
      features: [
        "District-wide implementation plan",
        "Multi-level curriculum alignment",
        "Teacher certification program",
        "Administrative dashboard",
        "Ongoing professional development"
      ],
      target: "School Districts & Educational Authorities",
      color: "yellow"
    }
  ];

  const accessories = [
    {
      id: 7,
      name: "Sensor Expansion Pack",
      description: "Additional sensors to extend robotics capabilities.",
      price: "$299",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3QlMjBzZW5zb3J8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 8,
      name: "Robotics Challenge Set",
      description: "Materials for setting up competitive challenges.",
      price: "$499",
      image: "https://images.unsplash.com/photo-1565619624098-cf1d4256d52d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3QlMjBjaGFsbGVuZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 9,
      name: "Curriculum Extension",
      description: "Additional 20 lesson plans for advanced topics.",
      price: "$199",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmljdWx1bXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 10,
      name: "Storage & Charging Station",
      description: "Organized storage and charging for robotics kits.",
      price: "$349",
      image: "https://images.unsplash.com/photo-1550367083-9fa5411cb303?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmdpbmclMjBzdGF0aW9ufGVufDB8fDB8fHww"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cretile-yellow/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cretile-blue/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto slide-in-section">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-cretile-blue text-cretile-blue dark:border-cretile-yellow dark:text-cretile-yellow">
                Institutional Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Premium <span className="text-cretile-blue dark:text-cretile-blue">STEM</span> Products for <span className="text-cretile-yellow">Educational Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover our comprehensive range of educational robotics products designed for institutions at every level. From elementary schools to university research labs, we have the tools to elevate your STEM education.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-cretile-blue hover:bg-cretile-blue/90 text-white">
                  Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-cretile-yellow text-cretile-yellow hover:bg-cretile-yellow hover:text-white">
                  Download Catalog <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Products */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Educational Robotics <span className="text-cretile-blue dark:text-cretile-yellow">Kits</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Complete robotics solutions for different educational levels, designed to integrate seamlessly into existing curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationalProducts.map((product) => (
                <div key={product.id} className="slide-in-section bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute top-4 right-4 ${product.color === 'blue' ? 'bg-cretile-blue' : 'bg-cretile-yellow'} text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full`}>
                      {product.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className={`mr-2 mt-1 ${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'}`} />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-600">
                      <span className={`${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-bold text-xl`}>
                        {product.price}
                      </span>
                      <a href="#" className={`${product.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-medium hover:underline flex items-center`}>
                        View Details <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutional Solutions */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Institutional <span className="text-cretile-yellow">Solutions</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive packages designed for schools, districts, and educational organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {institutionalSolutions.map((solution) => (
                <div key={solution.id} className="slide-in-section bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute top-4 right-4 ${solution.color === 'blue' ? 'bg-cretile-blue' : 'bg-cretile-yellow'} text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full`}>
                      {solution.target}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{solution.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{solution.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className={`mr-2 mt-1 ${solution.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'}`} />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-600">
                      <span className={`${solution.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-bold text-xl`}>
                        {solution.price}
                      </span>
                      <a href="#" className={`${solution.color === 'blue' ? 'text-cretile-blue' : 'text-cretile-yellow'} font-medium hover:underline flex items-center`}>
                        Request Info <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Accessories & <span className="text-cretile-blue dark:text-cretile-yellow">Add-ons</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Enhance your educational robotics experience with these specialized add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessories.map((item) => (
                <div key={item.id} className="slide-in-section bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-cretile-blue dark:text-cretile-yellow font-bold">{item.price}</span>
                      <Button variant="outline" size="sm" className="h-8 flex items-center text-xs border-cretile-blue text-cretile-blue dark:border-cretile-yellow dark:text-cretile-yellow">
                        <PlusCircle className="mr-1 h-3 w-3" /> Add to Quote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-cretile-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-section">
                <h2 className="text-3xl font-bold mb-6">Why Educational Institutions <span className="text-cretile-yellow">Choose Cretile</span></h2>
                <p className="text-lg mb-8 text-white/90">
                  Our educational robotics solutions are specifically designed to meet the needs of modern educational institutions and align with curriculum standards.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-yellow"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Curriculum Alignment</h3>
                      <p className="text-white/80">All our products are designed to align with NGSS, Common Core, and other international curriculum standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-yellow"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ease of Implementation</h3>
                      <p className="text-white/80">We provide comprehensive support including professional development, lesson plans, and technical assistance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-yellow"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                      <p className="text-white/80">Our products have been shown to increase student engagement, improve STEM learning outcomes, and develop 21st century skills.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="slide-in-section">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576153192621-7a3be10b356e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHMlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Students using Cretile products" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <blockquote className="text-white text-xl italic mb-2">
                      "Cretile's robotics program has transformed our STEM curriculum, engaging students who previously showed little interest in technology."
                    </blockquote>
                    <div className="text-white/90">
                      <p className="font-semibold">Dr. Jennifer Martinez</p>
                      <p className="text-sm">STEM Director, Western Academy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked <span className="text-cretile-blue dark:text-cretile-yellow">Questions</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about our educational robotics solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="slide-in-section bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What age groups are your products suitable for?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our educational robotics products are designed for students from elementary school (3rd grade) through high school and beyond. Each product line is specifically tailored to meet the developmental needs and curriculum requirements of different age groups.
                </p>
              </div>
              
              <div className="slide-in-section bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Do you offer teacher training?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we provide comprehensive professional development and training for educators. This includes online courses, in-person workshops, and ongoing support to ensure teachers feel confident implementing our robotics solutions in their classrooms.
                </p>
              </div>
              
              <div className="slide-in-section bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How durable are your robotics kits?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our products are specifically designed for educational environments and can withstand the rigors of classroom use. We use high-quality materials and components, and our kits come with replacement parts and comprehensive warranties.
                </p>
              </div>
              
              <div className="slide-in-section bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Can your products be used for competition preparation?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! Many of our products are designed with robotics competitions in mind. Our competition packages include specialized components, training materials, and support services to help teams prepare for major robotics competitions.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center font-medium text-cretile-blue dark:text-cretile-yellow hover:underline">
                View all FAQs <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cretile-blue to-cretile-blue/80 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform STEM education at your institution?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact our educational solutions team to discuss your needs and get a customized quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="btn-secondary px-8 py-3 text-lg font-medium">
                  Request a Quote
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProductsPage;


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Briefcase, GraduationCap, Award, Target, BarChart, Users, BookOpen, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '../contexts/ThemeContext';

const ServicesPage = () => {
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

  const educationalServices = [
    {
      icon: <GraduationCap className="w-12 h-12 text-cretile-blue dark:text-cretile-yellow" />,
      title: "STEM Curriculum Development",
      description: "Custom curriculum design aligned with educational standards and institutional goals, integrating robotics and coding into existing subject areas.",
      features: [
        "Standards-aligned lesson plans",
        "Cross-curricular integration strategies",
        "Assessment tools and rubrics",
        "Differentiated learning pathways"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-cretile-blue dark:text-cretile-yellow" />,
      title: "Teacher Professional Development",
      description: "Comprehensive training programs designed to empower educators with the skills and confidence to teach robotics and coding effectively.",
      features: [
        "Hands-on technology workshops",
        "Pedagogical best practices",
        "Classroom management strategies",
        "Ongoing coaching and support"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-cretile-blue dark:text-cretile-yellow" />,
      title: "STEM Program Implementation",
      description: "End-to-end support for launching and maintaining successful robotics and coding programs in educational settings.",
      features: [
        "Program design and planning",
        "Equipment selection and setup",
        "Staff training and development",
        "Program evaluation frameworks"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-cretile-blue dark:text-cretile-yellow" />,
      title: "Educational Workshops & Events",
      description: "Engaging, hands-on learning experiences designed to inspire students and develop technical skills through practical application.",
      features: [
        "Robotics boot camps and intensives",
        "Coding and programming workshops",
        "STEM competition preparation",
        "Special events and demonstrations"
      ]
    }
  ];

  const institutionalServices = [
    {
      icon: <Briefcase className="w-12 h-12 text-cretile-yellow" />,
      title: "Strategic Technology Planning",
      description: "Consultative services to help educational leaders develop comprehensive plans for technology integration that align with institutional goals and budget constraints.",
      features: [
        "Technology needs assessment",
        "Multi-year implementation roadmaps",
        "Budget planning and optimization",
        "Stakeholder engagement strategies"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-cretile-yellow" />,
      title: "Program Assessment & Analytics",
      description: "Data-driven evaluation of STEM programs to measure impact, identify improvements, and demonstrate outcomes to stakeholders.",
      features: [
        "Custom metrics and KPIs",
        "Longitudinal tracking systems",
        "Impact reporting frameworks",
        "Research-based improvement strategies"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-cretile-yellow" />,
      title: "Competition & Event Management",
      description: "Comprehensive support for organizing and running successful educational robotics competitions, hackathons, and other STEM events.",
      features: [
        "Event planning and logistics",
        "Technical infrastructure setup",
        "Judging criteria and frameworks",
        "Participant recruitment and support"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-cretile-yellow" />,
      title: "Government & Non-Profit Partnerships",
      description: "Specialized services for public sector and non-profit organizations implementing large-scale STEM education initiatives.",
      features: [
        "Proposal and grant development",
        "Public-private partnership models",
        "Compliance and reporting frameworks",
        "Scaling and sustainability plans"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The curriculum development services from Cretile transformed our approach to STEM education. Their team created a seamless integration of robotics into our existing subject areas, making technology accessible to all our teachers regardless of their technical background.",
      name: "Dr. Lisa Hernandez",
      title: "Curriculum Director",
      organization: "Westfield School District",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      quote: "The professional development workshops exceeded our expectations. Our teachers went from being intimidated by robotics to confidently leading innovative projects in just a few months. The ongoing support has been invaluable.",
      name: "Michael Chen",
      title: "Technology Coordinator",
      organization: "Ridgeview Academy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWRzaG90fGVufDB8fDB8fHww"
    },
    {
      quote: "Cretile's strategic technology planning helped our district make informed decisions about our STEM initiative. Their data-driven approach ensured we invested in sustainable programs that showed measurable student outcomes.",
      name: "Sarah Washington",
      title: "Superintendent",
      organization: "Oakdale Public Schools",
      image: "https://images.unsplash.com/photo-1587614380862-0294272b5ce0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-section">
                <span className="inline-block px-3 py-1 bg-cretile-blue/10 text-cretile-blue dark:bg-cretile-yellow/10 dark:text-cretile-yellow rounded-full text-sm font-medium mb-4">
                  Educational Services
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Expert <span className="text-cretile-blue dark:text-cretile-blue">Services</span> for Educational <span className="text-cretile-yellow">Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Our comprehensive range of educational services helps institutions implement, maintain, and optimize STEM education programs that prepare students for the future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-cretile-blue hover:bg-cretile-blue/90 text-white dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-cretile-yellow text-cretile-yellow hover:bg-cretile-yellow hover:text-white dark:border-cretile-blue dark:text-cretile-blue dark:hover:bg-cretile-blue dark:hover:text-white">
                    Download Service Catalog
                  </Button>
                </div>
              </div>
              
              <div className="slide-in-section">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cretile-blue/20 to-cretile-yellow/20 rounded-2xl filter blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYWNoZXIlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Teacher Professional Development" 
                    className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[400px]"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <span className="flex h-3 w-3 bg-green-500 rounded-full"></span>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Now Booking: Fall 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Educators */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Services for <span className="text-cretile-blue dark:text-cretile-yellow">Educators</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive support designed to empower teachers and enhance educational outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationalServices.map((service, index) => (
                <div key={index} className="slide-in-section bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md h-fit">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-cretile-blue dark:text-cretile-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow font-medium hover:underline">
                        Learn More <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services for Institutions */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Services for <span className="text-cretile-yellow">Institutions</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Strategic solutions for schools, districts, and educational organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {institutionalServices.map((service, index) => (
                <div key={index} className="slide-in-section bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-cretile-blue/10 dark:bg-cretile-yellow/10 p-4 rounded-xl shadow-md h-fit">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-cretile-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="#" className="inline-flex items-center text-cretile-yellow font-medium hover:underline">
                        Learn More <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our <span className="text-cretile-blue dark:text-cretile-yellow">Process</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A collaborative, data-driven approach to implementing educational technology solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cretile-blue via-cretile-yellow to-cretile-blue"></div>
                
                <div className="relative z-10">
                  <div className="slide-in-section mb-12 flex items-start">
                    <div className="flex-shrink-0 bg-cretile-blue text-white rounded-full h-12 w-12 flex items-center justify-center mr-4 shadow-lg">1</div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Assessment & Planning</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We begin with a comprehensive assessment of your current STEM education programs, resources, and goals. Our consultants work closely with key stakeholders to understand your unique needs and develop a customized implementation plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="slide-in-section mb-12 flex items-start justify-end">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Professional Development</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We deliver targeted training and ongoing support to ensure your educators feel confident and competent with the new technologies and teaching methodologies. Our professional development is hands-on, practical, and aligned with your curriculum.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-cretile-yellow text-gray-900 rounded-full h-12 w-12 flex items-center justify-center ml-4 shadow-lg">2</div>
                  </div>
                  
                  <div className="slide-in-section mb-12 flex items-start">
                    <div className="flex-shrink-0 bg-cretile-blue text-white rounded-full h-12 w-12 flex items-center justify-center mr-4 shadow-lg">3</div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Implementation & Support</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our team provides hands-on support during the initial implementation phase, helping to set up equipment, integrate curriculum materials, and address any technical challenges. We work alongside your staff to ensure a smooth transition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="slide-in-section flex items-start justify-end">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Evaluation & Refinement</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We use data-driven assessment methods to evaluate program effectiveness and student outcomes. Based on this analysis, we work with you to refine and optimize your STEM initiatives for continuous improvement and long-term success.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-cretile-yellow text-gray-900 rounded-full h-12 w-12 flex items-center justify-center ml-4 shadow-lg">4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Our <span className="text-cretile-blue dark:text-cretile-yellow">Clients</span> Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear from educational institutions that have partnered with Cretile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="slide-in-section bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-cretile-yellow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cretile-blue to-cretile-blue/80 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to elevate STEM education at your institution?</h2>
              <p className="text-xl mb-8 text-white/90">
                Schedule a consultation with our educational services team to discuss your specific needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="btn-secondary px-8 py-3 text-lg font-medium">
                  Schedule a Consultation
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Download Service Guide
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

export default ServicesPage;

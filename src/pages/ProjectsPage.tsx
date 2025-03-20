
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, FileDown, Clock, MapPin, Users, Award, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '../contexts/ThemeContext';

const ProjectsPage = () => {
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

  const featuredProjects = [
    {
      id: 1,
      title: "Smart City Initiative",
      location: "Franklin STEM Academy, Boston",
      description: "Students created miniature smart city models using sensors to monitor traffic, energy usage, and environmental factors. The project integrated concepts from urban planning, environmental science, and technology.",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjBjaXR5fGVufDB8fDB8fHww",
      studentAge: "14-16 years",
      duration: "4 months",
      achievements: ["Regional Innovation Award", "Featured in STEM Today Magazine"],
      technologies: ["IoT Sensors", "Arduino", "Data Visualization"]
    },
    {
      id: 2,
      title: "Agricultural Robotics",
      location: "Greenfield High School, Portland",
      description: "A project focused on automated farming solutions, including irrigation systems and crop monitoring robots. Students developed prototypes that could measure soil conditions and autonomously water plants based on needs.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZyUyMHJvYm90fGVufDB8fDB8fHww",
      studentAge: "16-18 years",
      duration: "6 months",
      achievements: ["State STEM Competition Winner", "Partnership with Local Farms"],
      technologies: ["Robotics", "Environmental Sensors", "Python Programming"]
    },
    {
      id: 3,
      title: "Healthcare Innovations",
      location: "Medical Preparatory School, Chicago",
      description: "Students developed assistive robots designed to help with healthcare monitoring and mobility support. The project addressed real-world challenges faced by elderly and mobility-impaired individuals.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMHJvYm90fGVufDB8fDB8fHww",
      studentAge: "15-17 years",
      duration: "5 months",
      achievements: ["Healthcare Innovation Award", "Presented at Medical Tech Conference"],
      technologies: ["Medical Sensors", "AI Algorithms", "Human-Computer Interaction"]
    }
  ];

  const otherProjects = [
    {
      id: 4,
      title: "Renewable Energy Lab",
      location: "Westside Science Academy, Seattle",
      description: "Students designed and built miniature renewable energy systems, comparing efficiency of different approaches.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVuZXdhYmxlJTIwZW5lcmd5fGVufDB8fDB8fHww",
      studentAge: "12-14 years",
      technologies: ["Solar panels", "Wind turbines", "Energy monitoring"]
    },
    {
      id: 5,
      title: "Environmental Monitoring System",
      location: "Lakeside Middle School, Denver",
      description: "A network of sensors to monitor air quality, water quality, and other environmental factors on campus.",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudmlyb25tZW50YWwlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
      studentAge: "11-13 years",
      technologies: ["Environmental sensors", "Data logging", "Web dashboards"]
    },
    {
      id: 6,
      title: "Underwater ROV Project",
      location: "Coastal Academy, Miami",
      description: "Students built remotely operated vehicles to explore underwater environments and collect data.",
      image: "https://images.unsplash.com/photo-1586422405722-da3eefan9ded9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuZGVyd2F0ZXIlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D",
      studentAge: "15-17 years",
      technologies: ["Waterproof robotics", "Remote control systems", "Marine biology"]
    },
    {
      id: 7,
      title: "Interactive Art Installation",
      location: "Arts & Technology School, Austin",
      description: "An interdisciplinary project combining programming, robotics, and visual arts to create interactive installations.",
      image: "https://images.unsplash.com/photo-1633286441883-7dc1d9a56a97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwaW5zdGFsbGF0aW9ufGVufDB8fDB8fHww",
      studentAge: "13-18 years",
      technologies: ["Motion sensors", "LED systems", "Interactive programming"]
    },
    {
      id: 8,
      title: "Space Exploration Simulation",
      location: "Northern District STEM School, Houston",
      description: "Students developed a Mars rover simulation and carried out mock exploration missions.",
      image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFycyUyMHJvdmVyfGVufDB8fDB8fHww",
      studentAge: "14-16 years",
      technologies: ["Robotics", "Programming", "Virtual reality"]
    },
    {
      id: 9,
      title: "Wearable Technology for Sports",
      location: "Athletic Preparatory Academy, San Diego",
      description: "Students created wearable devices to monitor athletic performance and provide real-time feedback.",
      image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhcmFibGUlMjB0ZWNofGVufDB8fDB8fHww",
      studentAge: "15-18 years",
      technologies: ["Motion sensors", "Biometric monitoring", "Mobile app development"]
    }
  ];

  const caseStudies = [
    {
      id: 10,
      title: "District-Wide Robotics Integration",
      organization: "Metropolitan School District",
      location: "Los Angeles, CA",
      challenge: "Implementing a comprehensive robotics program across 15 schools with varying resource levels and teacher experience.",
      solution: "Cretile developed a phased implementation plan with differentiated training for teachers and a scalable equipment model.",
      results: "90% of schools successfully launched robotics programs within one year, with over 2,500 students participating.",
      image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzdHJpY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 11,
      title: "Rural STEM Access Initiative",
      organization: "Countryside Educational Cooperative",
      location: "Rural Montana",
      challenge: "Bringing high-quality STEM education to geographically dispersed schools with limited resources and connectivity.",
      solution: "Customized offline-capable robotics kits with curriculum designed for mixed-age classrooms and limited supervision.",
      results: "STEM participation increased by 175% across 8 rural schools, with 5 schools launching their first-ever robotics teams.",
      image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVyYWwlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
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
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="text-cretile-blue dark:text-cretile-blue">Innovative</span> Projects & <span className="text-cretile-yellow">Case Studies</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover how educational institutions are using Cretile's solutions to transform STEM education and prepare students for future careers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-cretile-blue hover:bg-cretile-blue/90 text-white dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                  Download Case Studies <FileDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-cretile-yellow text-cretile-yellow hover:bg-cretile-yellow hover:text-white dark:border-cretile-blue dark:text-cretile-blue dark:hover:bg-cretile-blue dark:hover:text-white">
                  Submit Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-cretile-blue dark:text-cretile-yellow">Projects</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Exceptional student projects that demonstrate the power of hands-on STEM education
              </p>
            </div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="slide-in-section">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <Badge variant="outline" className="px-3 py-1 border-cretile-blue text-cretile-blue dark:border-cretile-yellow dark:text-cretile-yellow">
                          Featured Project
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin size={14} className="mr-1 text-cretile-blue dark:text-cretile-yellow" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Users size={14} className="mr-1 text-cretile-blue dark:text-cretile-yellow" />
                          Age: {project.studentAge}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Clock size={14} className="mr-1 text-cretile-blue dark:text-cretile-yellow" />
                          Duration: {project.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center">
                              <Award size={16} className="mr-2 text-cretile-yellow" />
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow font-medium hover:underline">
                        View Project Details <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">More Student <span className="text-cretile-yellow">Projects</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore a variety of innovative projects from schools across the country
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <div key={project.id} className="slide-in-section bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <MapPin size={12} className="mr-1 text-cretile-blue dark:text-cretile-yellow" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <Users size={12} className="mr-1 text-cretile-blue dark:text-cretile-yellow" />
                        Age: {project.studentAge}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow text-sm font-medium hover:underline">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-cretile-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4">Institutional <span className="text-cretile-yellow">Case Studies</span></h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Real-world examples of how educational institutions have implemented Cretile solutions at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {caseStudies.map((study) => (
                <div key={study.id} className="slide-in-section bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <Badge className="mb-3 bg-cretile-yellow text-gray-900">Case Study</Badge>
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <div className="flex items-center text-sm text-white/80 mb-2">
                        <Building2 size={16} className="mr-2 text-cretile-yellow" />
                        {study.organization}
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <MapPin size={16} className="mr-2 text-cretile-yellow" />
                        {study.location}
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div>
                        <h4 className="font-semibold text-cretile-yellow mb-1">Challenge:</h4>
                        <p className="text-white/80">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-cretile-yellow mb-1">Solution:</h4>
                        <p className="text-white/80">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-cretile-yellow mb-1">Results:</h4>
                        <p className="text-white/80">{study.results}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a href="#" className="inline-flex items-center text-cretile-yellow font-medium hover:underline">
                        Read Full Case Study <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-cretile-yellow text-gray-900 hover:bg-cretile-yellow/90">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Project <span className="text-cretile-blue dark:text-cretile-yellow">Video Showcase</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Watch our explainer video to see Cretile solutions in action at various educational institutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://makerinmetech-my.sharepoint.com/personal/admin_makerinme_com/_layouts/15/embed.aspx?id=%2Fpersonal%2Fadmin%5Fmakerinme%5Fcom%2FDocuments%2FDrive%2FExtenal%20Shared%2FExplainerVideo%2FCretile%20Explainer%20Video%5Fupdate%2Emp4" 
                  width="100%" 
                  height="600" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  title="Cretile Explainer Video"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cretile-yellow to-cretile-yellow/80 text-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to start a STEM project at your institution?</h2>
              <p className="text-xl mb-8 text-gray-900/80">
                Our team can help you plan, implement, and document innovative STEM projects that engage students and meet your educational goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="bg-cretile-blue text-white px-8 py-3 rounded-full text-lg font-medium transition-colors hover:bg-cretile-blue/90">
                  Contact Our Project Team
                </a>
                <a href="#" className="bg-gray-900/10 hover:bg-gray-900/20 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Download Project Guide
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

export default ProjectsPage;

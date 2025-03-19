
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      image: "https://placehold.co/800x500/3770B5/white?text=Project+1",
      title: "Smart City Initiative",
      description: "Students created miniature smart city models using sensors to monitor traffic, energy usage, and environmental factors.",
      location: "Franklin STEM Academy",
      age: "14-16 years"
    },
    {
      image: "https://placehold.co/800x500/FFD036/dark?text=Project+2",
      title: "Agricultural Robotics",
      description: "A project focused on automated farming solutions, including irrigation systems and crop monitoring robots.",
      location: "Greenfield High School",
      age: "16-18 years"
    },
    {
      image: "https://placehold.co/800x500/3770B5/white?text=Project+3",
      title: "Healthcare Innovations",
      description: "Students developed assistive robots designed to help with healthcare monitoring and mobility support.",
      location: "Medical Preparatory School",
      age: "15-17 years"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Success <span className="text-cretile-blue">Stories</span> & <span className="text-cretile-yellow">Innovations</span></h2>
          <p className="section-subheading">See how educational institutions are transforming STEM education with Cretile solutions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="slide-in-section">
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] bg-gradient-to-r from-cretile-blue to-cretile-blue/90">
              {!showVideo ? (
                <>
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="absolute top-0 right-0 bg-cretile-yellow text-cretile-blue text-sm font-bold px-4 py-2 z-20">
                    FEATURED
                  </div>
                  <img 
                    src="https://placehold.co/800x500/3770B5/white?text=Cretile+Explainer+Video" 
                    alt="Cretile Explainer Video" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="bg-cretile-yellow/90 p-5 rounded-full hover:bg-cretile-yellow transition-all duration-300 mb-4 shadow-lg"
                      aria-label="Play video"
                    >
                      <PlayCircle className="w-16 h-16 text-cretile-blue" />
                    </button>
                    <h3 className="text-white text-2xl font-bold mb-2">Watch Our Story</h3>
                    <p className="text-white/80 text-center max-w-sm">See how Cretile is transforming STEM education globally</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full">
                  <iframe 
                    src="https://makerinmetech-my.sharepoint.com/personal/admin_makerinme_com/_layouts/15/embed.aspx?id=%2Fpersonal%2Fadmin%5Fmakerinme%5Fcom%2FDocuments%2FDrive%2FExtenal%20Shared%2FExplainerVideo%2FCretile%20Explainer%20Video%5Fupdate%2Emp4" 
                    width="100%" 
                    height="100%" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                    title="Cretile Explainer Video"
                    className="border-0"
                  ></iframe>
                </div>
              )}
            </div>
            {showVideo && (
              <div className="flex justify-end mt-2">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="text-sm text-gray-600 hover:text-cretile-blue flex items-center"
                >
                  Close video and return to preview
                </button>
              </div>
            )}
          </div>

          <div className="slide-in-section" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cretile-blue">Transforming</span> <span className="text-cretile-yellow">Education</span> <span className="text-gray-900">Through Innovation</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Cretile partners with educational institutions worldwide to implement effective STEM programs that bridge the gap between theoretical knowledge and practical skills.
            </p>
            <p className="text-gray-700 mb-4">
              Our comprehensive solutions enable schools and organizations to create future-ready students equipped with critical thinking, problem-solving, and technical skills demanded by the modern workforce.
            </p>
            <p className="text-gray-700 mb-6">
              Watch our explainer video to discover how Cretile is revolutionizing STEM education for institutional partners through:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-cretile-blue/10 p-5 rounded-xl">
                <h4 className="font-semibold text-lg mb-2 text-cretile-blue">For Students</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-blue">•</span>
                    <span>Engaging hands-on learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-blue">•</span>
                    <span>Building future-ready technical skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-blue">•</span>
                    <span>Fostering creativity and problem-solving</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cretile-yellow/10 p-5 rounded-xl">
                <h4 className="font-semibold text-lg mb-2 text-cretile-yellow">For Institutions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-yellow">•</span>
                    <span>Comprehensive curriculum integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-yellow">•</span>
                    <span>Professional development for educators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cretile-yellow">•</span>
                    <span>Measurable learning outcomes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="#contact" 
                className="btn-primary mb-3 mr-3"
              >
                Partner With Us
              </a>
              <a 
                href="/case-studies" 
                className="text-cretile-blue hover:underline inline-flex items-center"
              >
                View all case studies <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Student Projects</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                          {project.location}
                        </span>
                        <span className="px-3 py-1 bg-cretile-yellow/20 text-cretile-blue rounded-full text-sm font-medium">
                          Age: {project.age}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 mr-4" />
              <CarouselNext className="relative -right-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-outline border-cretile-yellow text-cretile-yellow hover:bg-cretile-yellow hover:text-white">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

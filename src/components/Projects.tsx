
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';
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
      image: "https://placehold.co/800x500/cretile-blue/white?text=Project+1",
      title: "Smart City Initiative",
      description: "Students created miniature smart city models using sensors to monitor traffic, energy usage, and environmental factors.",
      location: "Franklin STEM Academy",
      age: "14-16 years"
    },
    {
      image: "https://placehold.co/800x500/cretile-yellow/white?text=Project+2",
      title: "Agricultural Robotics",
      description: "A project focused on automated farming solutions, including irrigation systems and crop monitoring robots.",
      location: "Greenfield High School",
      age: "16-18 years"
    },
    {
      image: "https://placehold.co/800x500/cretile-blue/white?text=Project+3",
      title: "Healthcare Innovations",
      description: "Students developed assistive robots designed to help with healthcare monitoring and mobility support.",
      location: "Medical Preparatory School",
      age: "15-17 years"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="slide-in-section text-center mb-16">
          <h2 className="section-heading">Success <span className="text-cretile-blue">Stories</span></h2>
          <p className="section-subheading">Explore innovative projects created by students and educators using Cretile robotics kits</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="slide-in-section">
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] bg-black">
              {!showVideo ? (
                <>
                  <img 
                    src="https://placehold.co/800x500/cretile-blue/white?text=Cretile+Explainer+Video" 
                    alt="Cretile Explainer Video" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="bg-white/20 backdrop-blur-sm p-5 rounded-full hover:bg-white/30 transition-all duration-300 mb-4"
                      aria-label="Play video"
                    >
                      <PlayCircle className="w-16 h-16 text-white" />
                    </button>
                    <h3 className="text-white text-2xl font-bold">Discover Cretile</h3>
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
          </div>

          <div className="slide-in-section" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4 text-cretile-blue">Transforming Education Through Innovation</h3>
            <p className="text-gray-700 mb-4">
              Cretile's robotics kits are being used in educational institutions across the globe to create groundbreaking projects that solve real-world problems.
            </p>
            <p className="text-gray-700 mb-4">
              Our comprehensive B2B solutions enable schools and organizations to implement effective STEM programs that engage students in hands-on learning while developing critical future skills.
            </p>
            <p className="text-gray-700 mb-6">
              Watch our explainer video to see how Cretile is revolutionizing STEM education for institutional partners.
            </p>

            <div className="bg-cretile-blue/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2 text-cretile-blue">Key outcomes for partner institutions:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-cretile-blue">•</span>
                  <span>94% increase in student engagement with STEM subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cretile-blue">•</span>
                  <span>89% of partner schools report improved standardized test scores</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cretile-blue">•</span>
                  <span>76% growth in student participation in STEM-related extracurriculars</span>
                </li>
              </ul>
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
          <a href="#" className="btn-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

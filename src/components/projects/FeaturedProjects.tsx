
import React from 'react';
import { ArrowRight, MapPin, Users, Clock, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Types for project data
export interface FeaturedProject {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  studentAge: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 slide-in-section">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-cretile-blue dark:text-cretile-yellow">Projects</span></h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exceptional student projects that demonstrate the power of hands-on STEM education
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
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
  );
};

export default FeaturedProjects;

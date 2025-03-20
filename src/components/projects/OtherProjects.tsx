
import React from 'react';
import { ArrowRight, MapPin, Users } from 'lucide-react';

export interface OtherProject {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  studentAge: string;
  technologies: string[];
}

interface OtherProjectsProps {
  projects: OtherProject[];
}

const OtherProjects: React.FC<OtherProjectsProps> = ({ projects }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 slide-in-section">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">More Student <span className="text-cretile-yellow">Projects</span></h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a variety of innovative projects from schools across the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
  );
};

export default OtherProjects;

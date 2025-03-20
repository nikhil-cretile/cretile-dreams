
import React from 'react';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectHero = () => {
  return (
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
  );
};

export default ProjectHero;

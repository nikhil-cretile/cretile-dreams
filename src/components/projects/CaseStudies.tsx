
import React from 'react';
import { ExternalLink, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export interface CaseStudy {
  id: number;
  title: string;
  organization: string;
  location: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  return (
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
  );
};

export default CaseStudies;

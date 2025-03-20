
import React from 'react';

const ProjectsCTA = () => {
  return (
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
  );
};

export default ProjectsCTA;


import React from 'react';

const VideoShowcase = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 slide-in-section">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Project <span className="text-cretile-blue dark:text-cretile-yellow">Video Showcase</span></h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch our explainer video to see Cretile solutions in action at various educational institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              width="100%" 
              height="100%" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Cretile Explainer Video"
              className="border-0 absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

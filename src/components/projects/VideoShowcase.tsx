
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
  );
};

export default VideoShowcase;

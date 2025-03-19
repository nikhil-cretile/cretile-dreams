
import React from 'react';

const RollingProjects = () => {
  const projectItems = [
    {
      image: "https://placehold.co/300x200/3770B5/white?text=Project+1",
      name: "Cambridge STEM Academy"
    },
    {
      image: "https://placehold.co/300x200/FFD036/dark?text=Project+2",
      name: "Robotics National Competition"
    },
    {
      image: "https://placehold.co/300x200/3770B5/white?text=Project+3",
      name: "Singapore Tech School"
    },
    {
      image: "https://placehold.co/300x200/FFD036/dark?text=Project+4",
      name: "STEM for All Initiative"
    },
    {
      image: "https://placehold.co/300x200/3770B5/white?text=Project+5",
      name: "District-wide Robotics Program"
    },
    {
      image: "https://placehold.co/300x200/FFD036/dark?text=Project+6",
      name: "Future Engineers Program"
    },
  ];

  // Duplicate the items to create a seamless loop
  const allProjects = [...projectItems, ...projectItems];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <h3 className="text-2xl font-bold text-center mb-2">Our <span className="text-cretile-blue">Global</span> <span className="text-cretile-yellow">Impact</span></h3>
        <p className="text-center text-gray-600 mb-10">Powering STEM education in institutions worldwide</p>
      </div>
      
      <div className="rolling-container">
        <div className="rolling-content">
          <div className="flex space-x-6">
            {allProjects.map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-900">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollingProjects;

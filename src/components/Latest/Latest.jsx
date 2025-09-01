import React from 'react';
import laptop from '../laptop.png'; 


const projects = [
  {
    title: "Harigurus",
    subtitle: "(Event Booking)",
    description: "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
    image: laptop,
    techStack: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma']
  },
  {
    title: "Smart Bug Tracker",
    subtitle: "(Bug Management)",
    description: "A tool to track and prioritize software bugs using BST, HashMap, and ArrayList.",
    image: laptop,
    techStack: ['java', 'hashmap', 'arraylist', 'bst', 'swing']
  },
  {
    title: "AI Image Generator",
    subtitle: "(AI Project)",
    description: "Generate images using AI models and displayvs them dynamically on the website.",
    image: laptop,
    techStack: ['html', 'css', 'javascript', 'ai', 'api']
  },
  // add more projects here
];

const Latest = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Title */}
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 border-2 border-blue-300 px-8 py-2 rounded-md">
          Latest Works
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-12 relative z-10 mb-16">
            {/* Image */}
            <div className={`w-full md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-[90%] md:w-[80%] object-contain shadow-lg"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-3xl font-semibold text-orange-500">{project.title}</h3>
              <p className="italic text-gray-500 mb-2">{project.subtitle}</p>
              <p className="mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-100 border border-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full top-1/2 -translate-y-1/2 z-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;

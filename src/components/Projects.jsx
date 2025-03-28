import React from "react";
import projectData from "../data/projectData";
import { LuCodeXml } from "react-icons/lu";

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="bg-lightlemon/30 text-lemon px-4 py-1 rounded-full text-sm font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <LuCodeXml className="inline-block mr-2" />
            Portfolio
          </span>
          <h2
            className="text-lemon text-3xl md:text-4xl font-bold mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Selected Projects
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              // target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="bg-strokegray p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Project Image */}
                <div className="w-full h-50 bg-other rounded-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>

                {/* Project Details */}
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-lemon font-bold text-lg">
                    {project.title}
                  </h3>
                  <span className="text-other text-sm">{project.year}</span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

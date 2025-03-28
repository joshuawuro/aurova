import React from "react";
import { FaGlobe, FaCode, FaPalette, FaPenNib } from "react-icons/fa";
import services from "../data/services"; // Importing services

const iconMap = {
  FaGlobe: <FaGlobe className="text-black text-xl" />,
  FaCode: <FaCode className="text-black text-xl" />,
  FaPalette: <FaPalette className="text-black text-xl" />,
  FaPenNib: <FaPenNib className="text-black text-xl" />,
};

const HowCanIAssist = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-lemon text-3xl md:text-4xl font-bold mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          How Can I <br /> Assist You?
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={(service.id = 1)}
              className="bg-gray-100 text-black p-6 rounded-lg shadow-md flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex items-center gap-3">
                <div className="bg-lemon p-2 rounded-full">
                  {iconMap[service.icon]} {/* Dynamically fetch icon */}
                </div>
                <p className="text-gray-600 text-sm">0{index + 1}</p>
              </div>
              <p className="text-gray-700">{service.description}</p>
              <p className="font-bold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowCanIAssist;

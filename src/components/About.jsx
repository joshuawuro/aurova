import React from "react";
import Image from "../assets/ON3S95181.png";
import Arrow from "../assets/Hand-drawn-arrow-symbol-isolated-on-transparent-background-PNG.png";
import worldMap from "../assets/world_map_PNG9.png";
import { FaGlobeAfrica } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-strokegray">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center lg:mt-10">
        {/* Left Section */}
        <div className="md:col-span-1">
          <h2
            className="text-lemon text-3xl mb-6 font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h2>
          <p
            className="text-other text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="100"
          >
            I specialize in creating user-friendly, high-performance websites
            and applications that solve real-world problems and deliver seamless
            digital experiences. By blending creativity with strategic
            development, I craft custom solutions that not only meet your goals
            but also engage users and drive results. Let’s collaborate on your
            next project to bring your vision to life.
          </p>
          {/* Hide arrow on mobile */}
          <img
            src={Arrow}
            alt="Decorative hand-drawn arrow"
            className="w-80 opacity-30 hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="100"
          />
        </div>

        {/* Middle Card */}
        <div className="bg-white h-full text-black p-10 rounded-lg shadow-lg text-left">
          <div className="flex flex-col items-start space-y-4">
            <FaGlobeAfrica
              className="text-6xl text-black flex-shrink-0"
              data-aos="zoom-in"
              data-aos-duration="100"
            />
            <p
              className="text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              120%
            </p>
            <p
              className="text-strokegray text-lg"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              Average increase in clients engagement in the first 6 months
            </p>
          </div>
          <div
            className="mt-10 bg-lemon rounded-lg flex items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="100"
          >
            <img
              src={Image}
              alt="Professional portrait"
              className="w-100 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-1 space-y-8">
          <img
            src={worldMap}
            alt="World map illustration"
            className="w-full max-w-lg mx-auto opacity-70"
            data-aos="zoom-in"
            data-aos-duration="100"
          />
          <div className="flex items-start gap-4">
            <BsStars
              className="text-lemon text-4xl flex-shrink-0"
              data-aos="flip-up"
              data-aos-duration="100"
            />
            <p
              className="text-other text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              I specialize in creating intuitive, user-friendly web designs and
              applications that solve real-world problems and deliver seamless
              digital experiences.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <BsStars
              className="text-lemon text-4xl flex-shrink-0"
              data-aos="flip-up"
              data-aos-duration="100"
            />
            <p
              className="text-other text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              I combine creativity and strategy to deliver custom web solutions.
              I focus on meeting your goals and ensuring a seamless user
              experience.
            </p>
          </div>
          {/* <div className="flex items-start gap-4">
            <BsStars className="text-lemon text-4xl flex-shrink-0" />
            <p className="text-other text-lg leading-relaxed">
              I create user-friendly, high-performance websites and apps that
              solve problems and deliver seamless digital experiences, helping
              bring your vision to life.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

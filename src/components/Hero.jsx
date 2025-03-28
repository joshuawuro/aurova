import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsSend } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { LuCodeXml } from "react-icons/lu";
import Image from "../assets/ON3S9518.png";

function Hero() {
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-10 justify-center min-h-screen max-w-7xl mx-auto text-white p-6 lg:p-16">
      <div className="lg:w-1/2 text-center lg:text-left">
        <span className="bg-lightlemon/30 text-lemon px-4 py-1 rounded-full text-sm font-semibold">
          <LuCodeXml
            className="inline-block mr-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          Software Developer
        </span>
        <h1
          className="text-3xl lg:text-3xl font-bold mt-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Hi, My Name is
        </h1>
        <h1
          className="text-4xl lg:text-6xl font-bold text-lemon"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Joshua Awuro
        </h1>
        <p
          className="mt-4 text-gray-300"
          data-aos="fade-up"
          data-aos-duration="1700"
        >
          I help businesses gain 20X more leads with fast-loading, beautiful,
          and uniquely designed websites.
        </p>
        <div className="mt-6 flex gap-2 md:gap-4 items-center justify-center lg:justify-start">
          <a
            href="/contact"
            className="bg-lemon text-black px-2 md:px-6 py-3 rounded-lg shadow-lg border-2 border-lemon cursor-pointer transition-all 
            hover:bg-gray-800 hover:text-lemon hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            Contact me <BsSend className="inline-block ml-2" />
          </a>
          <a
            href="https://drive.google.com/file/d/1C_xtJQwSutnvUjOtyBZ25k1_NBESkoYm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-lemon text-lemon px-2 md:px-5 py-3 rounded-lg shadow-lg cursor-pointer transition-all
            hover:bg-lemon hover:text-black hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            Download CV <FiDownload className="inline-block ml-2" />
          </a>
        </div>
      </div>
      <div
        className="mt-10 lg:mt-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img
          src={Image}
          alt="Joshua Awuro"
          className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;

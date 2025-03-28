import { useState } from "react";

const Navbar = ({ scrollToSection, refs }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-lg border-2 border-strokegray rounded-full px-6 py-4 flex items-center justify-between w-[90%] max-w-7xl z-50 shadow-lg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/* Logo */}
      <a
        href="#"
        className="text-lemon font-semibold text-lg mx-5 transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => scrollToSection(refs.heroRef)}
      >
        AUROVA
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex text-white font-medium">
        <li>
          <button
            className="px-4 py-2 hover:bg-gray hover:border-strokegray hover:rounded-full"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 hover:bg-gray hover:border-strokegray hover:rounded-full"
            onClick={() => scrollToSection(refs.missionRef)}
          >
            Mission
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 hover:bg-gray hover:border-strokegray hover:rounded-full"
            onClick={() => scrollToSection(refs.assistRef)}
          >
            How Can I Assist
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 hover:bg-gray hover:border-strokegray hover:rounded-full"
            onClick={() => scrollToSection(refs.projectsRef)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 hover:bg-gray hover:border-strokegray hover:rounded-full"
            onClick={() => scrollToSection(refs.testimonialsRef)}
          >
            Testimonials
          </button>
        </li>
      </ul>

      {/* Contact Button */}
      <button
        className="hidden lg:block px-5 py-2 bg-lightlemon text-black font-semibold rounded-full hover:bg-lemon hover:cursor-pointer"
        onClick={() => scrollToSection(refs.contactRef)}
      >
        Contact
      </button>

      {/* Mobile & Tablet Menu Button */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavOpen(!navOpen)}
      >
        <div
          className="w-8 h-1 bg-eggshell mb-1 transition-all"
          style={{
            transform: navOpen ? "rotate(45deg) translateY(12px)" : "none",
          }}
        ></div>
        <div
          className={`w-8 h-1 bg-eggshell mb-1 transition-all ${
            navOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className="w-8 h-1 bg-eggshell transition-all"
          style={{
            transform: navOpen ? "rotate(-45deg) translateY(-11px)" : "none",
          }}
        ></div>
      </div>

      {/* Mobile & Tablet Navigation */}
      <ul
        className={`absolute top-16 left-0 w-full h-[100dvh] bg-background/90 p-6 flex flex-col items-center space-y-4 text-white font-medium lg:hidden transition-all ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <button
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setNavOpen(false);
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection(refs.missionRef);
              setNavOpen(false);
            }}
          >
            Mission
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection(refs.assistRef);
              setNavOpen(false);
            }}
          >
            How Can I Assist
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection(refs.projectsRef);
              setNavOpen(false);
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection(refs.testimonialsRef);
              setNavOpen(false);
            }}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            className="px-5 py-2 bg-lemon text-black font-semibold rounded-full hover:bg-lightlemon"
            onClick={() => {
              scrollToSection(refs.contactRef);
              setNavOpen(false);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

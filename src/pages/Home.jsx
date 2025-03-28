import { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MissionStatement from "../components/MissionStatement";
import HowCanIAssist from "../components/HowCanIAssist";
import Projects from "../components/Projects";
import TestimonialSlider from "../components/TestimonialSlider";
import Navbar from "../components/Navbar"; // Ensure you import the Navbar
import Contact from "../components/Contact";

function Home() {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const assistRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          missionRef,
          assistRef,
          projectsRef,
          testimonialsRef,
          contactRef,
        }}
      />
      <div className="container mx-auto px-4">
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={missionRef}>
          <MissionStatement />
        </div>
        <div ref={assistRef}>
          <HowCanIAssist />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={testimonialsRef}>
          <TestimonialSlider />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;

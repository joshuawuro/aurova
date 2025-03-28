import { useState, useEffect } from "react";
import testimonials from "../data/testimonials";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 overflow-hidden">
      <div
        className="flex w-[90vw] max-w-[500px] h-[300px] transition-transform duration-700"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`min-w-full h-full flex items-center relative transition-opacity duration-700 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-2/3 p-6 pr-12 bg-lemon text-gray rounded-lg text-sm opacity-90">
              <p className="font-bold text-sm">{item.text}</p>
              <p className="italic mt-2 text-gray/70">{item.name}</p>
              <p className="text-xs text-gray/70">{item.role}</p>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="absolute -right-10 w-40 h-40 md:w-60 md:h-60 rounded-full object-cover -translate-x-6"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-gray transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-lemon" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

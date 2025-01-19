import React, { useState } from "react";

const ProjectsImg = () => {
  const slides = [
    {
      id: 1,
      title: "Digital Prism",
      description:
        "Where geometry meets art in a stunning display of light and form.",
      image:
        "https://www.crisp-design.co.uk/wp-content/uploads/2019/09/gunton-pools.jpg",
    },
    {
      id: 2,
      title: "Tech Haven",
      description:
        "Immerse yourself in the cutting edge of technology and innovation.",
      image: "https://www.centuryply.com/blogimage/16-04-24/32-1.jpg",
    },
    {
      id: 3,
      title: "Neural Dreams",
      description:
        "AI-generated masterpieces that blur the line between human and machine creativity.",
      image:
        "https://housing.com/news/wp-content/uploads/2022/11/showcase-design-for-hall-compressed.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
   
      <div
        className="flex flex-wrap w-full mb-7 flex-col items-center text-center font-Montserrat"
       
      >
        <h1 className="sm:text-3xl text-4xl font-serif title-font text-pri uppercase">
          Completed Project <span className="sm:text-3xl text-6xl"></span>
        </h1>
      </div>
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 mt-5">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl" />
        </div>

        {/* Carousel Container */}
        <div className="carousel-container relative">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
            <div
              className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white"
            onClick={prevSlide}
            title="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white"
            onClick={nextSlide}
            title="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="w-full h-full p-4 sm:p-8">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                  index === activeSlide
                    ? "bg-white/60"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveSlide(index)}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsImg;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      image:
        "https://t3.ftcdn.net/jpg/00/83/92/82/360_F_83928200_mYGZqB0ozTtSS6J5EtW9834mjb5tLW6x.jpg",
      heading: "Modern Office Room",
      paragraph: "Discover beautiful.",
      buttonText: "Explore Design",
      buttonLink: "#modern-design",
    },
    {
      image:
        "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg",
      heading: "Organized Office Spaces",
      paragraph: "Maximize your productivity.",
      buttonText: "Learn More",
      buttonLink: "#organized-office",
    },
    {
      image:
        "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2Feed15e46-2292-4833-82a8-4971bd4b681d.jpg&w=3840&q=75",
      heading: "Inspiring Workspaces",
      paragraph: "Creative workspaces.",
      buttonText: "Get Inspired",
      buttonLink: "#inspire-workspace",
    },
  ];

  useEffect(() => {
    let interval;

    // Initialize AOS
    AOS.init({ duration: 1500, once: false });

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="App">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-[800px] overflow-hidden rounded-lg">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === currentIndex ? "" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={item.image}
                className="absolute block w-full h-full object-cover"
                alt={'Slide ${index + 1}'}
              />
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-40 font-serif"
          data-aos="fade-up"
          data-aos-duration="1000"
          key={currentIndex}
        >
          <h3
            className="text-5xl font-semibold lg:text-4xl md:text-3xl sm:text-base"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {carouselData[currentIndex].heading}
          </h3>
          <p
            className="text-xl mt-4 max-w-xl lg:text-lg md:text-base sm:text-base sm:mt-2"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {carouselData[currentIndex].paragraph}
          </p>
          <a
            href={carouselData[currentIndex].buttonLink}
            className="bg-black text-white font-bold py-3 px-6 mt-6 rounded-md lg:py-2 lg:px-4 md:py-1.5 md:px-3 sm:mt-4 sm:text-base"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {carouselData[currentIndex].buttonText}
          </a>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-500"
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={'Slide ${index + 1}'}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span> */}
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span> */}
        </button>
      </div>
    </div>
  );
}

export default Header;
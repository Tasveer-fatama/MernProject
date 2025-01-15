import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the data array for the cards
const cardsData = [
  {
    id: 1,
    icon: (
      <svg
        fill="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-11 h-11 group-hover:fill-sec"
        viewBox="0 0 64 64"
      >
        <path
          className="color231f20 svgShape"
          d="M49.69 25.67c.74 0 1.39-.55 1.49-1.31.11-.82.16-1.67.16-2.51 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .71-.05 1.42-.14 2.12-.11.82.47 1.57 1.29 1.68.07.01.14.02.2.02z"
        />
        <path
          className="color231f20 svgShape"
          d="M24.26 45.86h15.95c.74 0 1.36-.53 1.48-1.26l.13-.82c.52-3.2 2.07-6.29 4.49-8.93 1.02-1.12 1.91-2.36 2.64-3.68.4-.73.14-1.64-.59-2.04a1.5 1.5 0 00-2.04.59c-.62 1.12-1.37 2.17-2.23 3.11-2.7 2.96-4.47 6.42-5.15 10.03h-2.79c.31-4.33 1.86-8.64 2.65-10.83.55-1.53.7-1.94.55-2.52-.17-.67-.77-1.14-1.46-1.14H26.11c-.69 0-1.29.47-1.46 1.13-.15.58 0 .99.55 2.53.79 2.19 2.33 6.5 2.65 10.82h-2.79A19.57 19.57 0 0020.07 33c-3.23-3.43-4.77-7.92-4.36-12.64.68-7.7 6.74-13.9 14.4-14.75 6.37-.71 12.43 2.23 15.79 7.67.43.71 1.36.92 2.06.49.71-.43.92-1.36.49-2.06C44.5 5.28 37.35 1.8 29.8 2.64c-9.08 1.01-16.25 8.35-17.06 17.47-.49 5.5 1.39 10.96 5.16 14.96a16.57 16.57 0 014.23 8.41 4.083 4.083 0 00-1.97 3.49c0 .99.37 1.89.96 2.6-.59.71-.96 1.61-.96 2.6 0 2.26 1.84 4.1 4.1 4.1h1.98c.29 2.93 2.76 5.22 5.76 5.22s5.47-2.29 5.76-5.21h1.98c2.26 0 4.1-1.84 4.1-4.1 0-2.16-1.68-3.92-3.8-4.07-.1-.02-.2-.03-.3-.03H24.26c-.61 0-1.1-.5-1.1-1.1s.49-1.12 1.1-1.12zm3.9-14.48h7.68c-.88 2.45-2.41 6.9-2.71 11.48h-2.27c-.29-4.59-1.82-9.03-2.7-11.48zM32 58.49c-1.34 0-2.46-.95-2.73-2.21h5.45A2.779 2.779 0 0132 58.49zm7.74-7.42c.61 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1H24.25c-.61 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h15.49zM15.76 7.96c.07-.05.13-.12.19-.18 1.08-1.24.46-2.08.15-2.38-.32-.3-1.19-.89-2.37.25-1.19 1.14-.64 2.03-.35 2.36.17.2.53.51 1.07.51.35 0 .79-.14 1.31-.56zm-.14-1.94c.47.53.44 1.17.25 1.61l-.79-1.12.54-.49z"
        />
        <path
          className="color231f20 svgShape"
          d="M16.37 38.55c.6-.57.63-1.52.07-2.12-4.16-4.42-6.23-10.44-5.69-16.51.2-2.23.74-4.39 1.62-6.45a1.501 1.501 0 00-2.76-1.18c-1 2.34-1.62 4.82-1.85 7.36a24.402 24.402 0 006.5 18.83c.3.31.69.47 1.09.47.36.01.73-.12 1.02-.4z"
        />
      </svg>
    ),
    title: 'Innovative Thinking',
    description:
      "We are committed to using innovative thinking to respond to increasing requirements for sustainable business and to add value to our client's activities.",
  },
  {
    id: 2,
    icon: (
      <svg
        fill="#fff"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-11 h-11 group-hover:fill-sec"
        viewBox="0 0 128 128"
      >
        <path
          className="color353534 svgShape"
          d="M123.2 42.2l-8.4-39.7c-.1-.5-.4-.8-.7-.9-.2-.2-.6-.3-1.2-.2-.2 0-.3.1-.5.2L77.8 22.3c-.7.4-1 1.4-.5 2.1.2.3.4.5.7.6l9.5 4.1-1.9 4.9c-.6 1.7-15.1 38.6-72.9 38.6-2.2 0-4.6-.1-6.9-.2h-.3c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5 0 .3.2.6.5.7l.2.1C18 78.1 31 80.3 44.2 80.5c47.7 0 64.8-35.5 65-35.9l2.3-4.9 9.7 4.2c.4.2.9.1 1.1 0 .3-.1.6-.3.8-.8.2-.3.2-.6.1-.9zM11.6 126.7h24.9V90.6c-8.4-.6-16.7-1.9-24.9-4v40.1zm79.9-48.8v48.8h24.9V53.2h-.1c-3.6 5.7-11.5 16.2-24.8 24.7zm-40 48.8h24.9V85.4C69.2 88.1 61 90 51.5 90.7v36z"
        />
        <path
          className="color000000 svgShape"
          d="M157 440.5l-5.9-45.5c-.4-3.2-2.4-6.1-5.3-7.6s-6.3-1.6-9.3-.1l-41.6 21 66.5-126.5 12.9 30.8c1.8 4.2 6.1 6.7 10.6 6.1l36-4.5 1.8 1.3-65.7 125zm99-125.1l-13.9-10.5c-.1-.1-.3-.2-.4-.3l-11.9-9c-1.8-1.3-3.9-2-6.1-2-.4 0-.8 0-1.3.1l-32.5 4.1-12.7-30.2c-1-2.4-3-4.4-5.4-5.4l-30.2-12.7 4.1-32.5c.3-2.6-.4-5.2-2-7.3L124 183.3l19.8-26.2c1.6-2.1 2.3-4.7 2-7.3l-4.1-32.5 30.2-12.7c2.4-1 4.4-3 5.4-5.4L190 69l32.5 4.1c2.6.3 5.2-.4 7.3-2l-11.9 9c-.1.1-.2.2-.4.3L256 315.4zm119.5 71.8c-2.9-1.5-6.4-1.4-9.3.1-2.9 1.5-4.9 4.4-5.3 7.6l-5.9 45.5-65.7-125 1.8-1.3 36 4.5c4.5.6 8.8-1.9 10.6-6.1l12.9-30.8 66.5 126.5-41.6-21z"
        />
      </svg>
    ),
    title: 'Decades of Experience',
    description:
      'With the help of our organization’s experience, we ensure you the best and robust operational system, guaranteeing your business success over competitors.',
  },
  {
    id: 3,
    icon: (
      <svg
        fill="#fff"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-11 h-11 group-hover:fill-sec"
        viewBox="0 0 512 512"
      >
        <path
          className="color000000 svgShape"
          d="M352.8 183.3c0-53.4-43.4-96.8-96.8-96.8s-96.8 43.4-96.8 96.8 43.4 96.8 96.8 96.8 96.8-43.4 96.8-96.8zm-173.4 0c0-42.2 34.4-76.6 76.6-76.6 42.2 0 76.6 34.4 76.6 76.6 0 42.2-34.4 76.6-76.6 76.6-42.2 0-76.6-34.3-76.6-76.6z"
        />
        <path
          className="color000000 svgShape"
          d="M368.3 272.1l16.9-7.1c4.2-1.8 6.7-6.1 6.1-10.6l-4.5-36 21.9-29c2.7-3.6 2.7-8.6 0-12.2l-21.9-29 4.5-36.1c.6-4.5-1.9-8.8-6.1-10.6l-33.5-14.1-14.1-33.5c-1.8-4.2-6.1-6.7-10.6-6.1l-36 4.5-29-21.9a10.2 10.2 0 00-12.2 0l-29 21.9-36-4.5c-4.5-.6-8.8 1.9-10.6 6.1l-14.1 33.5-33.5 14.1c-4.2 1.8-6.7 6.1-6.1 10.6l4.5 36.1-21.9 29a10.2 10.2 0 000 12.2l21.9 29-4.5 36c-.6 4.5 1.9 8.8 6.1 10.6l16.9 7.1-81.1 154.6c-2 3.9-1.3 8.6 1.7 11.8 3.1 3.1 7.8 3.9 11.7 1.9l57-28.8 8.2 63c.6 4.4 3.9 7.9 8.2 8.6.6.1 1.2.2 1.8.2 3.7 0 7.2-2 8.9-5.4l79-150.2 10.9 8.3c1.8 1.4 3.9 2 6.1 2 2.1 0 4.3-.7 6.1-2l10.9-8.3 79 150.2c1.8 3.4 5.2 5.4 8.9 5.4.6 0 1.2 0 1.8-.2 4.3-.8 7.7-4.3 8.2-8.6l8.2-63 57 28.8c3.9 2 8.7 1.2 11.7-1.9 3.1-3.1 3.8-7.9 1.7-11.8l-81.1-154.6zM157 440.5l-5.9-45.5c-.4-3.2-2.4-6.1-5.3-7.6s-6.3-1.6-9.3-.1l-41.6 21 66.5-126.5 12.9 30.8c1.8 4.2 6.1 6.7 10.6 6.1l36-4.5 1.8 1.3-65.7 125zm99-125.1l-13.9-10.5c-.1-.1-.3-.2-.4-.3l-11.9-9c-1.8-1.3-3.9-2-6.1-2-.4 0-.8 0-1.3.1l-32.5 4.1-12.7-30.2c-1-2.4-3-4.4-5.4-5.4l-30.2-12.7 4.1-32.5c.3-2.6-.4-5.2-2-7.3L124 183.3l19.8-26.2c1.6-2.1 2.3-4.7 2-7.3l-4.1-32.5 30.2-12.7c2.4-1 4.4-3 5.4-5.4L190 69l32.5 4.1c2.6.3 5.2-.4 7.3-2l-11.9 9c-.1.1-.2.2-.4.3L256 315.4zm119.5 71.8c-2.9-1.5-6.4-1.4-9.3.1-2.9 1.5-4.9 4.4-5.3 7.6l-5.9 45.5-65.7-125 1.8-1.3 36 4.5c4.5.6 8.8-1.9 10.6-6.1l12.9-30.8 66.5 126.5-41.6-21z"
        />
      </svg>
    ),
    title: 'Our Attitude',
    description:
      'Our professional attitude is impeccable; we deliver what we promise. Our services are praised by thousands of clients worldwide.',
  },
  {
    id: 4,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-11 h-11 group-hover:fill-sec"
        viewBox="0 0 48 48"
      >
        <path d="M46 12.05v13.36s-2.86.56-3.45.64-2.43.67-3.77-.62c-2.06-2-9.39-9.26-9.39-9.26A2.78 2.78 0 0026.1 16c-1.86 1-4.62 2.42-5.77 3a2.66 2.66 0 01-4-2.08A2.71 2.71 0 0118 14.53c2.63-1.59 8.17-4.7 10.48-5.93 1.4-.75 2.41-.81 4.34.81 2.37 2 4.48 3.82 4.48 3.82a2.2 2.2 0 001.78.34C41.77 13 46 12.05 46 12.05zM16.84 34.69A2.34 2.34 0 0014 31.46a2.45 2.45 0 00-.51-2.38 2.47 2.47 0 00-2.36-.59 2.38 2.38 0 00-.51-2.37 2.66 2.66 0 00-3.72.09c-1.09 1.05-1.78 2.94-.81 4.05s2.08.44 2.93.24c-.23.85-.94 1.63-.07 2.73s2.08.44 2.93.25c-.23.84-.91 1.7-.07 2.72s2.23.48 3.14.2c-.35.9-1.11 1.88-.13 3s3.21.59 4.3-.45a2.61 2.61 0 00.24-3.69 2.47 2.47 0 00-2.52-.57zm20-6.95l-8.45-8.46a2.77 2.77 0 00-3-.54c-1.18.52-2.7 1.23-3.85 1.77a6.24 6.24 0 01-2.6.86 4.4 4.4 0 01-2.32-8.14c1.76-1.22 5.81-3.37 5.81-3.37a5.11 5.11 0 00-3.94-1.56c-2.7 0-8.34 3.69-8.34 3.69a4.38 4.38 0 01-3.88.1l-4.4-1.53v15.29s1.25.36 2.38.82a5.19 5.19 0 011.24-2 4.88 4.88 0 016.68 0 4.24 4.24 0 011.05 1.88 4.2 4.2 0 012.86 3 4.18 4.18 0 011.81 1.1A4.36 4.36 0 0119 32.67a4.28 4.28 0 011.88 1.13 4.42 4.42 0 011.17 3.85s.63.71 1 1.1A1.94 1.94 0 0025.83 36s-2.72-2.85-2.51-3.07S27 36.3 27 36.37a1.94 1.94 0 102.74-2.75l-.25-.24s-3.41-3-3.15-3.29 4.49 3.69 4.5 3.69a1.94 1.94 0 002.66-.06 1.91 1.91 0 00.1-2.59s-3.22-3.4-3-3.65 3.43 3 3.43 3a1.94 1.94 0 102.75-2.74z" />
      </svg>
    ),
    title: 'Cutting-Edge Technology',
    description:
      'Leveraging the latest technology, we deliver solutions that redefine industry standards and drive innovation for your business.',
  },
  {
    id: 5,
    icon: (
      <svg
        fill="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-11 h-11 group-hover:fill-sec"
        viewBox="0 0 24 24"
      >
        <path
          className="color000000 svgShape"
          d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
        />
        <path
          className="color000000 svgShape"
          d="M12 13c-1.9 0-3.5-1.2-3.9-2.8C8 10 8 9.8 8 9.5 8 7.6 9.8 6 12 6s4 1.6 4 3.5c0 .3 0 .5-.1.7-.1.5-.7.9-1.2.7-.5-.1-.9-.7-.7-1.2v-.3c0-.7-.9-1.4-2-1.4s-2 .7-2 1.5v.3c.2.7 1 1.2 2 1.2.6 0 1 .4 1 1s-.4 1-1 1z"
        />
        <path
          className="color000000 svgShape"
          d="M12 18c-2.2 0-4-1.6-4-3.5 0-.3 0-.5.1-.7.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2v.3c0 .8.9 1.5 2 1.5s2-.7 2-1.5v-.3c-.2-.7-1-1.2-2-1.2-.6 0-1-.4-1-1s.4-1 1-1c1.9 0 3.5 1.2 3.9 2.8.1.1.1.3.1.6 0 1.9-1.8 3.5-4 3.5z"
        />
        <path
          className="color000000 svgShape"
          d="M12 20c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm0-12c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1zm3 3c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z"
        />
      </svg>
    ),
    title: 'Customer Satisfaction',
    description:
      'Our top priority is ensuring customer satisfaction through dedicated support and exceptional service quality.',
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Default easing for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div
          className="flex flex-wrap w-full mb-7 flex-col items-center text-center font-Montserrat"
          data-aos="fade-up"
        >
          <h1 className="sm:text-3xl text-4xl font-serif title-font text-pri uppercase">
            Why Choose Us <span className="sm:text-3xl text-6xl">?</span>
          </h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap -m-4 font-Lato">
          {cardsData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="xl:w-1/3 md:w-1/2 p-4 group cursor-pointer"
              data-aos="zoom-in"
            >
              <div className="shadow-xl p-6 rounded-lg bg-black flex flex-col h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                {/* Icon */}
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-md bg-[rgb(252,191,23)] mb-4">
                  {icon}
                </div>

                {/* Title */}
                <h2 className="text-lg text-white font-bold title-font mb-2 flex-shrink-0">
                  {title}
                </h2>

                {/* Description */}
                <p className="leading-relaxed text-base text-white flex-grow">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
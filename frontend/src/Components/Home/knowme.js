import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const KnowMe = () => {
  const countersRef = useRef([]);
  const cardsData = [
    {
      id: 1,
      icon: (
        <svg
          class="w-11 h-11 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
        </svg>
      ),
      title: "Commercial Services",
      description:
        "At Lucknow Building solution private limited, we specialize in delivering tailored commercial solutions that drive efficiency, innovation, and profitability for your business. .",
    },
    {
      id: 2,
      icon: (
        <svg
          class="w-11 h-11 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      title: "Industrial Project Solutions",
      description:
        "At Lucknow Building solution we specialize in delivering comprehensive industrial project solutions that empower businesses to excel in today's rapidly evolving industrial landscape.",
    },
    {
      id: 3,
      icon: (
        <svg
        class="w-11 h-11 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
      </svg>
      ),
      title: "Residential Project Solutions",
      description:
        "Our residential project solutions cater to a wide range of needs, from modern apartments to luxury villas, ensuring that every project reflects your vision and lifestyle.",
    },
    {
      id: 4,
      icon: (
        <svg
          class="w-11 h-11 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
        </svg>
      ),
      title: "Renovation Services",
      description:
        "At Lucknow Building solution Private limited, we turn outdated and worn-out spaces into modern, functional, and beautiful environments.",
    },
    {
      id: 4,
      icon: (
        <svg
          class="w-11 h-11 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      title: "Interior Design and Fit-Outs",
      description:
        "Transform your workspace into a productive and inspiring environment Turnkey solutions including space planning, furnishing, and decor.",
    },
    {
      id: 5,
      icon: (
        <svg
        class="w-11 h-11 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
      </svg>
      ),
      title: "Government Project Solutions",
      description:
        "At Lucknow Building solution Private limited , we are proud to contribute to nation-building by offering specialized services for government projects. ",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    const counters = countersRef.current;

    const animateCount = (el) => {
      const target = parseInt(el.getAttribute("data-target"));
      const speed = 50; // Adjust speed of the animation
      const increment = Math.ceil(target / speed);

      let count = target;

      const updateCount = () => {
        count -= increment;
        if (count <= 0) {
          el.textContent = `${target}+`;
          el.setAttribute("data-animated", "true"); // Mark as animated
        } else {
          el.textContent = `${Math.max(0, count)}+`;
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.getAttribute("data-animated") !== "true") {
            animateCount(el);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    counters.forEach((counter) => observer.observe(counter));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <div className="p-4 md:p-6 text-black bg-white">
        <div className="flex flex-wrap">
          {[
            { target: 23, label: "Years Experience" },
            { target: 75, label: "Happy Clients" },
            { target: 80, label: "Projects Done" },
            { target: 10, label: "Get Awards" },
          ].map((stat, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 py-8">
              <div
                className={`${
                  index !== 3 ? "md:border-r" : ""
                } border-gray-200 px-12`}
              >
                <h2
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={stat.target}
                  data-animated="false" // Default: not animated
                  className="text-4xl text-black md:text-5xl font-semibold text-center"
                >
                  0+
                </h2>
                <p className="mb-2 text-center">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* First Slide */}
        <div
          className="sticky  top-0 h-screen flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/6479484083027f25a6246fcb/6cf5527c-8eeb-4006-a790-df7efdd3157b/GGG+Website+graphic+upside.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="w-full justify-start items-center gap-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-12">
                {/* Left Content */}
                <div
                  className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
                  data-aos="fade-right"
                >
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div
                      className="flex-col justify-start lg:items-start items-center gap-4 flex"
                      data-aos="fade-up"
                    >
                      <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2 className="text-black text-3xl sm:text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                          BUILDING SOLUTIONS PRIVATE
                        </h2>
                        <p className="text-black text-sm sm:text-base font-normal leading-relaxed lg:text-start text-center">
                          Building Solutions Private Limited was founded with a
                          vision to revolutionize the construction industry by
                          delivering high- Quality,sustainable and innovative
                          infrastructure solutions. Over the years,we have grown
                          into a trusted name,completing numerous successful
                          projects across residential,commercial,and industrial
                          Sectors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Content */}
                <div
                  className="w-full lg:justify-start justify-center items-start flex"
                  data-aos="fade-up"
                >
                  <div className="sm:w-[564px] w-full sm:h-[646px] h-56 sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <img
                      className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                      src="/discussion.jpg"
                      alt="About Us image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Third Slide */}
        <div
          className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-black"
          style={{
            backgroundImage: "url('/Aboutimage.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="text-gray-600 body-font w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
              <h1 className="text-5xl sm:text-3xl font-serif title-font text-gray-900 mb-8 md:mb-12 text-center">
                Our Clients
              </h1>
              <div className="flex flex-wrap -m-4">
                {/* Testimonial Card 1 */}
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6 text-sm sm:text-base">
                      Building Solutions Private Limited exceeded our
                      expectations. Their team delivered our commercial complex
                      on time with top-notch quality and attention to
                      detail.Highly professional and transparent throughout the
                      project!
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/110x110"
                        className="w-12 h-12 rounded-full object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          Shivani trivedi
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6 text-sm sm:text-base">
                      "From planning to execution,the team handled everything
                      seamlessly.The materials used were of high quality, and
                      the project was completed before the deadline. I highly
                      recommend them for any residential or commercial
                      construction!"
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/110x110"
                        className="w-12 h-12 rounded-full object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          Tasveer fatama
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Fourth Slide */}
        <div
          className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://www.crisp-design.co.uk/wp-content/uploads/2019/09/gunton-pools.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="text-white body-font w-full">
            <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-24 max-w-screen-xl mx-auto">
              {/* Section Header */}
              <div
                className="flex flex-wrap w-full mb-8 flex-col items-center text-center font-Montserrat"
                data-aos="fade-up"
              >
                <h1 className="text-3xl sm:text-4xl font-serif title-font text-pri uppercase">
                  Our Services{" "}
                  <span className="text-5xl sm:text-6xl text-pri">?</span>
                </h1>
              </div>

              {/* Cards Container */}
            {/* Cards Container */}
<div className="flex flex-wrap -m-4 font-Lato">
  {cardsData.map(({ id, icon, title, description }) => (
    <div
      key={id}
      className="relative flex flex-col justify-center overflow-hidden  py-6 sm:py-12 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4"
    >
      <div className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-300 transition-all duration-300 group-hover:scale-[10]" />

        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-black">
          {icon}
          </span>

          <div className="space-y-6 pt-5 font-extrabold text-xl leading-7 text-white transition-all duration-300 group-hover:text-black">
            <p>{title}</p>
          </div>

          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
               
                className="text-white transition-all duration-300 group-hover:text-black"
              >
                {description}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KnowMe;

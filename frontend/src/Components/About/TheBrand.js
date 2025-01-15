import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const TheBrand = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Optional: Disable next/prev arrows
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        className="w-10 h-3 m-4 space-x-4 bg-yellow-600 cursor-pointer"
        style={{
          border: "3px solid #fff",
        }}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [
    {
      title: "FINANCIAL STRENGTH",
      description:
        "Shalimar Corp Limited has delivered consistent and handsome growth through its annual revenues to investors & shareholders since its very inception.",
      img: "https://blog.culturewise.com/hs-fs/hubfs/Speak%20Straight.jpg?width=600&name=Speak%20Straight.jpg",
    },
    {
      title: "FINANCIAL STRENGTH",
      description:
        "Shalimar Corp Limited has delivered consistent and handsome growth through its annual revenues to investors & shareholders since its very inception.",
      img: "https://blog.culturewise.com/hs-fs/hubfs/Speak%20Straight.jpg?width=600&name=Speak%20Straight.jpg",
    },
    {
      title: "FINANCIAL STRENGTH",
      description:
        "Shalimar Corp Limited has delivered consistent and handsome growth through its annual revenues to investors & shareholders since its very inception.",
      img: "https://blog.culturewise.com/hs-fs/hubfs/Speak%20Straight.jpg?width=600&name=Speak%20Straight.jpg",
    },
   
  ];
  return (
    <div>
      <div className="relative w-full mx-auto ">
  <img
    className="h-64 w-full object-cover rounded-md"
    src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
    alt="Random image"
  />
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-white text-4xl font-serif">About Us</h2>
  </div>
  
</div>
<section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="max-w-screen-lg text-black sm:text-lg ">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-black ">
        Powering innovation at <span className="font-extrabold">200,000+</span>{" "}
        companies worldwide
      </h2>
      <p className="mb-4 font-light">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <p className="mb-4 font-light">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <p className="mb-4 font-medium">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </p>
      <p className="mb-4 font-medium">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
      >
        Learn more
        <svg
          className="ml-1 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<>
  <section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div className="img-box">
          <img
            src="https://pagedone.io/asset/uploads/1702034769.png"
            alt="About Us tailwind page"
            className="max-lg:mx-auto object-cover"
          />
        </div>
        <div className="lg:pl-[100px] flex items-center">
          <div className="data w-full">
            <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
              About Us{" "}
            </h2>
            <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              Driven by a passion for seamless user experiences, we've
              meticulously curated pagedone to empower creators, designers, and
              developers alike. Our mission is to provide a comprehensive
              toolkit, enabling you to build intuitive, beautiful interfaces
              that resonate with users on every interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
        <div className="lg:pr-24 flex items-center">
          <div className="data w-full">
            <img
              src="https://pagedone.io/asset/uploads/1702034785.png"
              alt="About Us tailwind page"
              className="block lg:hidden mb-9 mx-auto object-cover"
            />
            <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
              We are Creative Since 2005
            </h2>
            <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              Pagedone isn’t just a collection of components and guidelines;
              it's a philosophy. We go beyond aesthetics, prioritizing
              accessibility, scalability, and usability. Every element, from the
              tiniest detail to the grandest layout, is meticulously crafted to
              enhance functionality and elevate user satisfaction.
            </p>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://pagedone.io/asset/uploads/1702034785.png"
            alt="About Us tailwind page"
            className="hidden lg:block object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</>
<div>
<div className="flex items-center justify-center min-h-[700px] bg-gray-100">
      <Slider {...settings} className="w-full max-w-8xl mt-6">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg md:flex-row md:space-x-28">
              {/* Left Content */}
              <div className="p-8 md:w-1/2">
                <h2 className="text-3xl font-bold text-gold-600 mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
                <div className="flex mt-4 space-x-4">
                 
                </div>
              </div>
              {/* Right Image */}
              <div className="w-full md:w-1/2 mt-20 mb-20">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

</div>


    </div>
  )
}

export default TheBrand

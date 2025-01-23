import React from "react";
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

  
  return (
    <div>
      <div className="relative w-full mx-auto ">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="/titlcovere.jpg"
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
              From Vision to Reality , Beyond Brick.
            </h2>
            <p className="mb-4 font-light">
              Established in 2014, Lucknow Building Solution Pvt. Ltd. has
              emerged as a trusted name in the construction and infrastructure
              sector. Headquartered in Lucknow, Uttar Pradesh, the company has
              consistently delivered high-quality projects, setting new
              benchmarks in real estate, property management, highway
              infrastructure, civil construction, and structural solutions. With
              a strong foundation built on expertise, innovation, and
              transparency, we are committed to shaping modern urban landscapes
              that enhance lifestyles and drive economic growth. Over the years,
              we have successfully developed and executed a diverse portfolio of
              projects, reinforcing our reputation as a leading construction and
              infrastructure company in Lucknow and beyond.
            </p>
           </div>
        </div>
      </section>

      <>
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <img
                  src="/discussion.jpg"
                  alt="About Us tailwind page"
                  className="max-lg:mx-auto object-cover"
                />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    Our Vision{" "}
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    At Lucknow Building Solution Pvt. Ltd., our vision is to
                    revolutionize the construction industry with world-class
                    engineering, design, and sustainable solutions. We aim to
                    deliver high-quality, durable, and aesthetically superior
                    structures that cater to both residential and commercial
                    needs. Our mission is to provide innovative, efficient, and
                    cost-effective solutions while maintaining the highest
                    standards of safety and sustainability. We believe in
                    building not just structures but long-term relationships
                    with our clients, partners, and stakeholders.
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
                    Our Mission
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    Real Estate & Property Management – Delivering premium
                    residential and commercial spaces that blend modern
                    aesthetics with functionality. Highway & Infrastructure
                    Development – Contributing to the nation’s growth by
                    building robust roadways, highways, and infrastructure
                    projects. Civil Construction & Structural Engineering –
                    Designing and executing durable, high-quality civil
                    structures with precision and efficiency. Glass Processing &
                    Architectural Solutions – Creating innovative glass and
                    structural designs to enhance the beauty and sustainability
                    of urban developments.
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
    
    </div>
  );
};

export default TheBrand;

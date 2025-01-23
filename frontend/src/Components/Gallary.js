import React from "react";

const galleryItems = [
  {
    id: 1,

    imgSrc: "gallry1.jpg",
    alt: "Photo by Minh Pham",
  },
  {
    id: 2,

    imgSrc: "gallry2.jpg",
    alt: "Photo by Magicle",
  },
  {
    id: 3,

    imgSrc: "gallry3.jpg",
    alt: "Photo by Martin Sanchez",
  },
  {
    id: 4,
    imgSrc: "gallry4.jpg",
    alt: "Photo by Lorenzo Herrera",
  },
  {
    id: 5,

    imgSrc: "gallry5.jpg",
    alt: "Photo by Lorenzo Herrera",
  },
  {
    id: 6,

    imgSrc: "gallry6.jpg",
    alt: "Photo by Lorenzo Herrera",
  },
];
const Gallary = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full mx-auto ">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="/titlcovere.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-serif"> gallery</h2>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-4 sm:gap-8 sm:mb-8 md:mb-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Gallery
            </h2>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {galleryItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${
                  item.id === 2 || item.id === 3 || item.id === 6 
                    ? "md:col-span-2 md:h-80"
                    : "md:h-80"
                }`}
              >
                <img
                  src={item.imgSrc}
                  loading="lazy"
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

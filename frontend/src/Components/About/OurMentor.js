import React from "react";

const OurMentor = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full mx-auto">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-serif">
            FOUNDER AND MENTOR
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex items-center justify-center bg-white py-10 px-4 mt-20 mb-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mentor"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-2xl md:text-3xl font-bold text-black">
              John Doe
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
            <h1 className="mb-4 text-2xl md:text-3xl font-bold text-black">
              His Contribution
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              excepturi magnam enim officiis facilis numquam corporis quos
              accusantium tempora, dolores quod cum facere architecto soluta
              atque corrupti a alias perferendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMentor;
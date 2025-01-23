import React from "react";

const OurMentor = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full mx-auto">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="/titlcovere.jpg"
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
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-serif text-gray-900 sm:text-4xl">
                Dr.Abid khan
              </h2>
              <p>FOUNDER & MENTOR</p>
              <p className="mt-4 text-gray-600 text-lg">
                Dr. Abid Khan, a visionary leader and the driving force behind
                Lucknow Building Solutions Private Limited, has laid the
                foundation for an organization that epitomizes innovation,
                excellence, and unwavering commitment to quality in the
                construction and building solutions industry. With his profound
                expertise and unparalleled foresight, Dr.Abid Khan has transformed
                the company into a cornerstone of trust and reliability. Under
                his stewardship, Lucknow Building Solutions has achieved
                remarkable milestones, redefining standards and expanding
                horizons across the construction landscape. Dr.Abid Khan's
                leadership transcends conventional boundaries, fostering a
                culture of innovation, collaboration, and excellence. His
                guidance empowers teams to excel and inspires individuals to
                achieve extraordinary results, driving the company's success to
                unprecedented heights.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="/Abid khan.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg h-96 w-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-serif text-gray-900 sm:text-4xl">
               Er. Azizur Rehman
              </h2>
              <p>FOUNDER & MENTOR</p>
              <p className="mt-4 text-gray-600 text-lg">
                Azizur Rehman , a beacon of inspiration and wisdom, has
                carved a unique legacy in the field of leadership and
                innovation. His visionary approach and unwavering dedication
                have been instrumental in shaping countless successes and
                driving transformative progress in his endeavors. With a deep
                reservoir of knowledge and an unrelenting commitment to
                excellence, Azizur Rehman has become a guiding light for teams,
                fostering an environment where creativity thrives and potential
                is realized. His ability to envision possibilities beyond the
                horizon has not only elevated organizational achievements but
                also redefined benchmarks within the industry. As a mentor and
                leader, Aziz Ur Rehman empowers individuals to dream bigger and
                strive harder, instilling values of perseverance, innovation,
                and integrity. His profound insights and thoughtful guidance
                serve as the foundation for sustainable growth and enduring
                success.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="/Aziz.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg h-96 w-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMentor;

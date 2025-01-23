import React from "react";

const Management = () => {
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
          <h2 className="text-white text-4xl font-serif">Management</h2>
        </div>
      </div>

      <section className="py-14 lg:py-24 relative bg-slate-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
            <div className="img-box relative">
              {/* Image with Shadow on Bottom and Right */}
              <img
                src="/vanimam2.jpg"
                alt="Vani Mami"
                className="rounded-md w-full max-w-lg mx-auto object-cover shadow-[8px_8px_16px_0px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Miss Shivani Trivedi
                </h2>
                <p>Manager & director</p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Shivani Trivedi plays an integral role as the Manager of
                  Lucknow Building Solution Pvt. Ltd., bringing a wealth of
                  experience and expertise to the company. With a strong
                  foundation in project management and team leadership, she has
                  been instrumental in overseeing the successful execution of
                  numerous projects while ensuring operational efficiency and
                  client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
            <div className="img-box relative">
              {/* Image with Shadow on Bottom and Right */}
              <img
                src="/AliAfzal.jpg"
                alt="Vani Mami"
                className="rounded-md w-full max-w-lg mx-auto object-cover shadow-[8px_8px_16px_0px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Er. Ali Afzal Khan
                </h2>
                <p>coordinator</p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Er.Ali Afzal Khan plays a crucial role as the coordinator of
                  Lucknow Building Solution Pvt. Ltd., leveraging his vast
                  experience and profound expertise in the construction
                  industry. With a deep understanding of project management,
                  team coordination, and client relations, he has been a key
                  player in overseeing the seamless execution of various
                  high-profile projects. Under his leadership, Lucknow Building
                  Solution Pvt. Ltd. has set benchmarks in project management
                  and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative bg-slate-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
            <div className="img-box relative">
              {/* Image with Shadow on Bottom and Right */}
              <img
                src="/Ashank .jpg"
                alt="Ashank Trivedi"
                className="rounded-md w-full max-w-lg mx-auto object-cover shadow-[8px_8px_16px_0px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Mr. Ashank Trivedi
                </h2>
                <p>Sales manager</p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Mr. Ashank Trivedi serves as the Sales Manager at Lucknow
                  Building Solution Pvt. Ltd., playing a pivotal role in driving
                  the company's growth and success. With a strong background in
                  sales strategy, client relationship management, and market
                  analysis, he has been instrumental in expanding the company's
                  client base and enhancing customer satisfaction. His expertise
                  lies in understanding client needs, providing tailored
                  solutions, and ensuring seamless communication between the
                  company and its stakeholders. Under his guidance, Lucknow
                  Building Solution Pvt. Ltd. has strengthened its market
                  position, delivering outstanding construction services while
                  building enduring partnerships with clients and collaborators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;

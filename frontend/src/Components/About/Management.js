import React from 'react';

const Management = () => {
  const sections = [
    {
      title: "Natural Language Processing (NLP):",
      description:
        "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
      image:
        "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      bgColor: "bg-slate-300",
      reverse: false,
    },
    {
      title: "Sentiment Analysis:",
      description:
        "The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback.",
      image:
        "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
      bgColor: "bg-slate-200",
      reverse: true,
    },
  ];

  return (
    <div>
      <div className="relative w-full mx-auto">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-serif">Management</h2>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative ${section.bgColor}`}
          >
            <div className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 pt-32 pb-32`}>
              {!section.reverse ? (
                <>
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-lg text-black">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={section.image}
                        alt="Section image"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-lg text-black">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={section.image}
                        alt="Section image"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management
import React from 'react';

const Governmentpro = () => {
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
  <h2 className="text-white text-4xl font-serif"> Government Projects</h2>
</div>
</div>

      {/* Coming Soon Section */}
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-50 via-blue-200 to-indigo-300">
        <h1 className="relative w-full text-center uppercase font-bold leading-[0.8] animate-dimlight box-reflect">
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wide">
            Coming Soon
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Governmentpro;

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const words = ["Welcome to Lucknow Building Solutions", "Premium Construction Services", "Join Us Today"];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[index];
      if (isDeleting) {
        setCurrentText(word.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(word.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeoutId = setTimeout(type, 100); // Adjust typing speed here
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlays */}
      <div className="relative z-10 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ textAlign: 'center' }}>
            {currentText}
          </h1>
          <p className="text-base sm:text-lg mb-8">Are you Looking for trusted construction company ?</p>
         <a href='/signup'>
         <button  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
         </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useEffect, useState  } from 'react';

const Completedpro = () => {
 const [projectList, setProjectList] = useState([]);
 const [industrialList, setIndustrialList] = useState([]);
 const [residentialList, setResidentialList] = useState([]);
 const [flippedIndex, setFlippedIndex] = useState(null); 
 const handleClick = (index) => {
  setFlippedIndex(flippedIndex === index ? null : index); // Toggle flip for the clicked card
};
  const fetchProjectList = async () => {
      try {
        const res = await fetch("http://localhost:5000/completedProjects/getall");
        if (res.ok) {
          const data = await res.json();
          setProjectList(data);
        } else {
          console.error("Failed to fetch project list");
        }
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };
  
    useEffect(() => {
      fetchProjectList();
    }, []);
  const fetchIndustrialList = async () => {
      try {
        const res = await fetch("http://localhost:5000/industrial/getall");
        if (res.ok) {
          const data = await res.json();
          setIndustrialList(data);
        } else {
          console.error("Failed to fetch project list");
        }
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };
  
    useEffect(() => {
      fetchIndustrialList();
    }, []);
  const fetchResidentialList = async () => {
      try {
        const res = await fetch("http://localhost:5000/residential/getall");
        if (res.ok) {
          const data = await res.json();
          setResidentialList(data);
        } else {
          console.error("Failed to fetch project list");
        }
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };
  
    useEffect(() => {
      fetchResidentialList();
    }, []);
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
  <h2 className="text-white text-4xl font-serif"> Completedprojects <br/>Commercial Project</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Render each card */}
    {projectList.map((item, index) => (
      <div
        key={item.id || index}
        className="relative w-full h-72 sm:h-80 md:h-96 perspective cursor-pointer"
        onClick={() => handleClick(index)} // Pass index to handle click
      >
        <div
          className={`w-full h-full transition-transform duration-700 transform ${
            flippedIndex === index ? 'rotate-y-180' : ''
          } relative preserve-3d`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-slate-300 flex items-center justify-center backface-hidden">
            <img
              src={`http://localhost:5000/${item.image}`} // Replace with your image URL
              alt="Front Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-black flex items-center justify-center rotate-y-180 backface-hidden">
            <h2 className="text-white text-2xl font-bold">Commercial Project</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="relative w-full mx-auto ">
<img
  className="h-64 w-full object-cover rounded-md"
  src="/titlcovere.jpg"
  alt="Random image"
/>
<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
<div className="absolute inset-0 flex items-center justify-center">
  <h2 className="text-white text-4xl font-serif"> Industrial Projects</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Render each card */}
    {industrialList.map((item, index) => (
      <div
        key={item.id || index}
        className="relative w-full h-72 sm:h-80 md:h-96 perspective cursor-pointer"
        onClick={() => handleClick(index)} // Pass index to handle click
      >
        <div
          className={`w-full h-full transition-transform duration-700 transform ${
            flippedIndex === index ? 'rotate-y-180' : ''
          } relative preserve-3d`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-slate-300 flex items-center justify-center backface-hidden">
            <img
              src={`http://localhost:5000/${item.image}`} // Replace with your image URL
              alt="Front Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-black flex items-center justify-center rotate-y-180 backface-hidden">
            <h2 className="text-white text-2xl font-bold">Industrial Project</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
 
</div>

<div className="relative w-full mx-auto ">
<img
  className="h-64 w-full object-cover rounded-md"
  src="/titlcovere.jpg"
  alt="Random image"
/>
<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
<div className="absolute inset-0 flex items-center justify-center">
  <h2 className="text-white text-4xl font-serif"> Residential Projects</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
 
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Render each card */}
    {residentialList.map((item, index) => (
      <div
        key={item.id || index}
        className="relative w-full h-72 sm:h-80 md:h-96 perspective cursor-pointer"
        onClick={() => handleClick(index)} // Pass index to handle click
      >
        <div
          className={`w-full h-full transition-transform duration-700 transform ${
            flippedIndex === index ? 'rotate-y-180' : ''
          } relative preserve-3d`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-slate-300 flex items-center justify-center backface-hidden">
            <img
              src={`http://localhost:5000/${item.image}`} // Replace with your image URL
              alt="Front Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-black flex items-center justify-center rotate-y-180 backface-hidden">
            <h2 className="text-white text-2xl font-bold">Residential Project</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Completedpro

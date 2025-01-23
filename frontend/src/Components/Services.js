import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Services = () => {
  const [projectList, setProjectList] = useState([]);
  const fetchProjectList = async () => {
    try {
      const res = await fetch("http://localhost:5000/services/getall");
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
    <h2 className="text-white text-4xl font-serif">Our Services</h2>
  </div>
</div>
<div className="flex flex-col items-center gap-8 py-8">
  {projectList.map((item, index) => (
    <div
    key={item.id || index}
      className={`flex flex-col md:flex-row justify-between items-center w-4/5 md:w-2/3 shadow-xl rounded-2xl p-6 border gap-6`}
    >
      <img
        src={`http://localhost:5000/${item.image}`}
        alt={item.title}
        className={`w-full md:w-1/3 rounded-2xl object-cover ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
      />
      <div className={`w-full md:w-2/3 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
        <h1 className="font-extrabold text-xl md:text-2xl mb-2">  {item.title}</h1>
        <p className="font-medium text-sm">{item.description}</p>
      </div>
    </div>
  ))}
</div>



    </div>
  )
}

export default Services

import React, { useEffect, useState  } from 'react';

const Completedpro = () => {
 const [projectList, setProjectList] = useState([]);

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
  return (
    <div>
       
    <div className="relative w-full mx-auto ">
<img
  className="h-64 w-full object-cover rounded-md"
  src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
  alt="Random image"
/>
<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
<div className="absolute inset-0 flex items-center justify-center">
  <h2 className="text-white text-4xl font-serif"> Completedprojects <br/>Commercial Project</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {/* CARD 1 */}
    {projectList.map((item,index)=>(
    <div key={item.id || index} className="rounded overflow-hidden shadow-lg flex flex-col">
    <a href="#" />
    <div className="relative">
      <a href="#">
        <img
          className="w-full h-64 object-cover"
          src={`http://localhost:5000/${item.image}`}
          alt={item.title}
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </a>
    </div>
    <div className="px-6 py-4 mb-auto">
      <a
        href="#"
        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
      >
        {item.title}
      </a>
      <p className="text-gray-500 text-sm">
        {item.description}
      </p>
    </div>
  </div>
    ))}
   </div>
</div>

<div className="relative w-full mx-auto ">
<img
  className="h-64 w-full object-cover rounded-md"
  src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
  alt="Random image"
/>
<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
<div className="absolute inset-0 flex items-center justify-center">
  <h2 className="text-white text-4xl font-serif"> Residential Projects</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
 
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
   {/* CARD 1 */}
   {projectList.map((item,index)=>(
   <div key={item.id || index} className="rounded overflow-hidden shadow-lg flex flex-col">
   <a href="#" />
   <div className="relative">
     <a href="#">
       <img
         className="w-full h-64 object-cover"
         src={`http://localhost:5000/${item.image}`}
         alt={item.title}
       />
       <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
     </a>
   </div>
   <div className="px-6 py-4 mb-auto">
     <a
       href="#"
       className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
     >
       {item.title}
     </a>
     <p className="text-gray-500 text-sm">
       {item.description}
     </p>
   </div>
 </div>
   ))}
  </div>
</div>

<div className="relative w-full mx-auto ">
<img
  className="h-64 w-full object-cover rounded-md"
  src="https://img.freepik.com/free-vector/building-construction-concept_1284-10515.jpg"
  alt="Random image"
/>
<div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
<div className="absolute inset-0 flex items-center justify-center">
  <h2 className="text-white text-4xl font-serif"> Industrial Projects</h2>
</div>
</div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
 
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
   {/* CARD 1 */}
   {projectList.map((item,index)=>(
   <div key={item.id || index} className="rounded overflow-hidden shadow-lg flex flex-col">
   <a href="#" />
   <div className="relative">
     <a href="#">
       <img
         className="w-full h-64 object-cover"
         src={`http://localhost:5000/${item.image}`}
         alt={item.title}
       />
       <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
     </a>
   </div>
   <div className="px-6 py-4 mb-auto">
     <a
       href="#"
       className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
     >
       {item.title}
     </a>
     <p className="text-gray-500 text-sm">
       {item.description}
     </p>
   </div>
 </div>
   ))}
  </div>
</div>
    </div>
  )
}

export default Completedpro

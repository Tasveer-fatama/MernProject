import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddedCompleted = () => {
  

  const [projectList, setProjectList] = useState([]);
  

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // Fetch the list of projects
  const fetchProjectList = async () => {
    try {
      const res = await fetch("https://mernproject-1-836a.onrender.com/completedProjects/getall");
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

  

  // Delete project
  const deleteProject = async (id) => {
    try {
      const res = await fetch(`https://mernproject-1-836a.onrender.com/completedProjects/delete/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        enqueueSnackbar("Project Deleted Successfully", { variant: "success" });
        fetchProjectList();
      } else {
        enqueueSnackbar("Failed to delete project", { variant: "error" });
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      enqueueSnackbar("An error occurred while deleting the project", { variant: "error" });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Completed Projects
      </h1>

      {/* Card Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {projectList.map((item, index) => (
          <div
            key={item.id || index}
            className="w-full sm:w-[calc(33.333%-1rem)] bg-white border shadow-lg rounded-xl dark:bg-neutral-900 dark:border-neutral-700"
          >
            <figure>
              <img
                className="w-full h-48 object-cover rounded-t-xl"
                src={`https://mernproject-1-836a.onrender.com/${item.image}`}
                alt={item.title}
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-neutral-400 mb-4">
                {item.description}
              </p>
              <div className="flex justify-end gap-2">
               
                <button
                  className="rounded-md bg-red-600 py-2 px-4 text-sm text-white transition hover:bg-red-700"
                  onClick={() => deleteProject(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default AddedCompleted;





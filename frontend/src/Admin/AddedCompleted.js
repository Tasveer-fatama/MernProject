import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const AddedCompleted = () => {
  const projectSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.string().required('Address is required'),
  });

  const [projectList, setProjectList] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // Fetch the list of projects
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

  // Handle update button click
  const handleUpdateClick = (project) => {
    setCurrentProject(project);
    setImageFile(null); // Reset the selected image file
    updateProjectForm.setValues({
      title: project.title || '',
      description: project.description || '',
      address: project.address || '',
    });
  };

  const updateProjectForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      address: "",
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("address", values.address);
        if (imageFile) formData.append("myfile", imageFile);

        const res = await fetch(`http://localhost:5000/completedProjects/update/${currentProject._id}`, {
          method: "PUT",
          body: formData,
        });
            console.log(currentProject);
            
        if (res.status === 200) {
          enqueueSnackbar("Project updated successfully", { variant: "success" });
          setCurrentProject(null);
          fetchProjectList();
        } else {
          enqueueSnackbar("Failed to update project", { variant: "error" });
        }
      } catch (error) {
        console.error(error);
        enqueueSnackbar("An error occurred while updating the project", { variant: "error" });
      }
    },
    validationSchema: projectSchema,
  });

  // Delete project
  const deleteProject = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/completedProjects/delete/${id}`, {
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
                src={`http://localhost:5000/${item.image}`}
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
                  className="rounded-md bg-blue-600 py-2 px-4 text-sm text-white transition hover:bg-blue-700"
                  onClick={() => handleUpdateClick(item)}
                >
                  Update
                </button>
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

      {/* Update Form */}
      {currentProject && (
        <div className="bg-gray-300 flex justify-center" style={{ fontFamily: "initial" }}>
          <div className="w-full max-w-lg my-10">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={updateProjectForm.handleSubmit}
            >
              <h2 className="mt-8 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Update Project
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  value={updateProjectForm.values.title}
                  onChange={updateProjectForm.handleChange}
                  placeholder="Enter title"
                />
                {updateProjectForm.touched.title && (
                  <span className="text-danger">{updateProjectForm.errors.title}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  value={updateProjectForm.values.description}
                  onChange={updateProjectForm.handleChange}
                  placeholder="Enter your description"
                />
                {updateProjectForm.touched.description && (
                  <span className="text-danger">{updateProjectForm.errors.description}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  value={updateProjectForm.values.address}
                  onChange={updateProjectForm.handleChange}
                  placeholder="Enter your address"
                />
                {updateProjectForm.touched.address && (
                  <span className="text-danger">{updateProjectForm.errors.address}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="image">
                  Update Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  type="file"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="font-black w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedCompleted;





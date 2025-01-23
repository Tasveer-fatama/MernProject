import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';


const projectSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.string().required('Address is required'),
});

const AddProject = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [selProject, setselProject] = useState('');
    const navigate = useNavigate();

    const uploadeProject = async (e) => {
        const file = e.target.files[0];
        setselProject(file); // Set file for form submission
        const fd = new FormData();
        fd.append("myfile", file);
        try {
            const res = await fetch("https://mernproject-1-836a.onrender.com/util/uploads", {
                method: "POST",
                body: fd,
            });
            if (res.status === 200) {
                console.log("File uploaded");
                toast.success('File Uploaded!');
            } else {
                throw new Error('File upload failed');
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to upload file');
        }
    };

    const addProjectForm = useFormik({
        initialValues: {
            title: "",
            description: "",
            address: "",
        },
        onSubmit: async (values, { resetForm }) => {
            values.image = selProject.name
            console.log(values);
            resetForm()
            const res = await fetch("https://mernproject-1-836a.onrender.com/industrial/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);

            if (res.status === 200) {
                enqueueSnackbar("Project added successfully", { variant: "success" });
            } else if (res.status === 400) {
                enqueueSnackbar("Something went wrong", { variant: "danger" });
            } else {
                enqueueSnackbar("Something went wrong", { variant: "danger" });
            }
        },
        validationSchema: projectSchema,
    });

    return (
        <>
        <div className='bg-gray-300 flex justify-center' style={{ fontFamily: "initial" }}>
            <div className="w-full max-w-lg my-10">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={addProjectForm.handleSubmit}
                >
                    <h2 className="mt-8 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Completed Projects
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            value={addProjectForm.values.title}
                            onChange={addProjectForm.handleChange}
                            placeholder="Enter title"
                        />
                        {addProjectForm.touched.title && (
                            <span className="text-danger">{addProjectForm.errors.title}</span>
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
                            value={addProjectForm.values.description}
                            onChange={addProjectForm.handleChange}
                            placeholder="Enter your description"
                        />
                        {addProjectForm.touched.description && (
                            <span className="text-danger">{addProjectForm.errors.description}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                          Address
                        </label>
                        <textarea
                            rows={4}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            value={addProjectForm.values.address}
                            onChange={addProjectForm.handleChange}
                            placeholder="Enter your address"
                        />
                        {addProjectForm.touched.address && (
                            <span className="text-danger">{addProjectForm.errors.address}</span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="image">
                            Select Image
                        </label>
                        <input
                            onChange={uploadeProject}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="font-black w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
             </div>
             
        </>
    );
};

export default AddProject;
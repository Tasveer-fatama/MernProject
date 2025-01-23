import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

const Inquirydetails = () => {
  const [inquiryDetails, setInquiryDetails] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchInquiryDetails = async () => {
    try {
      const res = await fetch("https://mernproject-1-836a.onrender.com/inquiry/getall");
      if (res.ok) {
        const data = await res.json();
        setInquiryDetails(data);
      } else {
        console.error("Failed to fetch project list");
      }
    } catch (error) {
      console.error("Error fetching project list:", error);
    }
  };

  useEffect(() => {
    fetchInquiryDetails();
  }, []);

  // Delete project
  const deleteProject = async (id) => {
    try {
      const res = await fetch(`https://mernproject-1-836a.onrender.com/inquiry/delete/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        enqueueSnackbar("Project Deleted Successfully", { variant: "success" });
        fetchInquiryDetails();
      } else {
        enqueueSnackbar("Failed to delete project", { variant: "error" });
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      enqueueSnackbar("An error occurred while deleting the project", { variant: "error" });
    }
  };

  return (
    <div className="p-5">
      <h1 className="mb-4 text-2xl font-serif text-center text-black md:text-4xl lg:text-5xl">
        Inquiry Details
      </h1>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full ">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-right text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inquiryDetails.map((item, index) => (
                  <tr key={item.id || index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.number}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.message}</td>
                    <td className="px-6 py-4 text-sm text-right font-medium">
                      <button
                        className="rounded-md bg-red-600 py-2 px-4 text-white transition hover:bg-red-700"
                        onClick={() => deleteProject(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquirydetails;

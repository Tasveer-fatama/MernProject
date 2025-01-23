import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const Userdetails = () => {
  const [signupDetails, setSignupDetails] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchUserDetails = async () => {
    try {
      const res = await fetch("https://mernproject-1-836a.onrender.com/api/v1/auth/getall");
      if (res.ok) {
        const data = await res.json();
        setSignupDetails(data);
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const deleteProject = async (id) => {
    try {
      const res = await fetch(`https://mernproject-1-836a.onrender.com/api/v1/auth/delete/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        enqueueSnackbar("User Deleted Successfully", { variant: "success" });
        fetchUserDetails();
      } else {
        enqueueSnackbar("Failed to delete user", { variant: "error" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      enqueueSnackbar("An error occurred while deleting the user", { variant: "error" });
    }
  };

  return (
    <div className="p-5">
    <h1 className="mb-4 text-2xl font-serif text-center text-black sm:text-3xl md:text-4xl lg:text-5xl">
      User Details
    </h1>
  
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border border-gray-200 shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider sm:px-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider sm:px-6"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider sm:px-6"
                >
                  Password
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-medium text-right text-gray-500 uppercase tracking-wider sm:px-6"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {signupDetails.map((item, index) => (
                <tr key={item.id || index}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 sm:px-6">
                    {item.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 sm:px-6">
                    {item.password}
                  </td>
                  <td className="px-4 py-4 text-sm text-right font-medium sm:px-6">
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

export default Userdetails;

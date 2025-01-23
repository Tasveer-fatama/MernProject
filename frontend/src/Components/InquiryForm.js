import React from "react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
  message: Yup.string().required("Message is required"),
});

function InquiryForm({ closeForm }) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const AddInquiryForm = useFormik({
    initialValues: {
      name: "",
      number: "",
      message: "",
    },
    validationSchema: projectSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("https://mernproject-1-836a.onrender.com/inquiry/add", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          enqueueSnackbar("Inquiry submitted successfully", { variant: "success" });
          resetForm();
        } else {
          const errorData = await res.json();
          enqueueSnackbar(errorData.message || "Something went wrong", { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("Network error. Please try again later.", { variant: "error" });
      }
    },
  });

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-semibold text-center mb-4">Inquiry Form</h2>
        <form onSubmit={AddInquiryForm.handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={AddInquiryForm.values.name}
              onChange={AddInquiryForm.handleChange}
              onBlur={AddInquiryForm.handleBlur}
              className={`w-full p-2 mt-1 border ${
                AddInquiryForm.touched.name && AddInquiryForm.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
            {AddInquiryForm.touched.name && AddInquiryForm.errors.name && (
              <span className="text-red-500 text-sm">{AddInquiryForm.errors.name}</span>
            )}
          </div>

          {/* Number Field */}
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={AddInquiryForm.values.number}
              onChange={AddInquiryForm.handleChange}
              onBlur={AddInquiryForm.handleBlur}
              className={`w-full p-2 mt-1 border ${
                AddInquiryForm.touched.number && AddInquiryForm.errors.number
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
            {AddInquiryForm.touched.number && AddInquiryForm.errors.number && (
              <span className="text-red-500 text-sm">{AddInquiryForm.errors.number}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={AddInquiryForm.values.message}
              onChange={AddInquiryForm.handleChange}
              onBlur={AddInquiryForm.handleBlur}
              className={`w-full p-2 mt-1 border ${
                AddInquiryForm.touched.message && AddInquiryForm.errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
            {AddInquiryForm.touched.message && AddInquiryForm.errors.message && (
              <span className="text-red-500 text-sm">{AddInquiryForm.errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
        {/* Close Icon */}
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default InquiryForm;

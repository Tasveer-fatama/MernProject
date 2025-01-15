import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SnackbarProvider } from 'notistack';
import Navbar from "./navbaar";
import HomePage from "./Components/Home/Homepage";
import Services from "./Components/Services";
import Brand from "./Components/About/TheBrand";
import Mentor from "./Components/About/OurMentor";
import Management from "./Components/About/Management";
import Projects from "./Components/Projects/project";
import Completedpro from "./Components/Projects/Completedpro";
import Governmentpro from "./Components/Projects/Governmentpro";
import Ongoingpro from "./Components/Projects/Ongoingpro";
import Gallary from "./Components/Gallary";
import Login from "./Components/LoginPopup/Login";
import Signup from "./Components/LoginPopup/Signup";
import Userdetails from "./Admin/userdetails";
import Footer from "./footer";
import AdminRoute from "./Routes/Adminroute";
import AdminDashboard from "../src/Admin/Admindashboard.js";
import Addcompletedproject from "../src/Admin/AddCompletedproject.js";
import InquiryForm from "./Components/InquiryForm.js";

// NotFound Component
const NotFound = () => (
  <div className="flex justify-center items-center h-screen">
    <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
  </div>
);

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false); // Default to false
  const location = useLocation(); // Hook to get current route

  // Handlers for login popup
  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  // Handler to close Inquiry Form
  const closeInquiryForm = () => {
    setShowInquiryForm(false);
  };

  // UseEffect to handle inquiry form visibility based on route
  useEffect(() => {
    if (location.pathname === "/") {
      setShowInquiryForm(true);
    } else {
      setShowInquiryForm(false);
    }
  }, [location.pathname]);

  return (
    <SnackbarProvider autoHideDuration={1000}>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <>
                <Routes>
                  <Route path="" element={<AdminRoute />}>
                    <Route path="admindashboard" element={<AdminDashboard />} />
                    <Route path="completedprojectRoute" element={<Addcompletedproject />} />
                    <Route
                      path="*"
                      element={<Navigate to="/admin/admindashboard" />}
                    />
                  </Route>
                </Routes>
              </>
            }
          />

          {/* Main Routes */}
          <Route
            path="*"
            element={
              <>
                <Navbar onLoginClick={handleLoginOpen} />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/brand" element={<Brand />} />
                    <Route path="/mentor" element={<Mentor />} />
                    <Route path="/management" element={<Management />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/completedpro" element={<Completedpro />} />
                    <Route path="/governmentpro" element={<Governmentpro />} />
                    <Route path="/ongoingpro" element={<Ongoingpro />} />
                    <Route path="/gallery" element={<Gallary />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Handle Not Found */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                {showLogin && <Login closeLogin={handleLoginClose} />}
                <ToastContainer />
                {/* Render InquiryForm only if showInquiryForm is true */}
                {showInquiryForm && <InquiryForm closeForm={closeInquiryForm} />}
              </>
            }
          />
        </Routes>
      </div>
    </SnackbarProvider>
  );
};

export default App;
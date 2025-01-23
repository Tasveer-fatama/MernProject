import React, { useState } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth";
import Logo from "./assets/Logo.png";

const DropdownLinks = [
  { id: 1, name: "Completed Projects", link: "/completedpro" },
  { id: 2, name: "Government Projects", link: "/governmentpro" },
];

const DropdownLinks2 = [
  { id: 1, name: "The Brand", link: "/brand" },
  { id: 2, name: "Our Mentor", link: "/mentor" },
  { id: 3, name: "Management", link: "/management" },
];

const Navbaar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    setMenuOpen(false); // Logout के बाद menu बंद हो
  };

  const phoneNumber = "919721080912";
  const message = "Hello! I would like to contact you.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setMenuOpen(false); // WhatsApp पर जाने के बाद menu बंद हो
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full h-32 shadow-md fixed top-0 left-0 z-50"  style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/6479484083027f25a6246fcb/6cf5527c-8eeb-4006-a790-df7efdd3157b/GGG+Website+graphic+upside.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center sm:px-8 h-full">
          {/* Logo */}
          <div className="flex justify-start items-start w-full">
            <img src={Logo} alt="logo" className="h-52 w-auto" />
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden md:hidden">
            <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row sm:items-end absolute sm:relative top-20 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none sm:justify-start`}
          >
            <ul className="flex flex-col sm:flex-row items-start gap-8 sm:px-0">
              <li>
                <NavLink
                  to="/"
                  className="text-2xl font-semibold hover:text-primary transition duration-200"
                  onClick={() => setMenuOpen(false)} // Click पर menu बंद हो
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-2xl font-semibold hover:text-primary transition duration-200"
                  onClick={() => setMenuOpen(false)} // Click पर menu बंद हो
                >
                  Services
                </NavLink>
              </li>
              <li className="group relative">
                <a href="#" className="text-2xl font-semibold flex items-center gap-1">
                  About <FaCaretDown />
                </a>
                <div className="absolute hidden group-hover:block bg-white rounded shadow-lg p-2 z-10 left-full">
                  {DropdownLinks2.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.link}
                      className="block px-4 text-2xl py-2 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)} // Click पर menu बंद हो
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </li>
              <li className="group relative">
                <a href="#" className="text-2xl font-semibold flex items-center gap-1">
                  Projects <FaCaretDown />
                </a>
                <div className="absolute hidden group-hover:block bg-white rounded shadow-lg p-2 z-10 left-full">
                  {DropdownLinks.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.link}
                      className="block px-4 py-2 text-xl hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)} // Click पर menu बंद हो
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-2xl font-semibold hover:text-primary transition duration-200"
                  onClick={() => setMenuOpen(false)} // Click पर menu बंद हो
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <FaWhatsappSquare
                  className="text-3xl text-green-500 cursor-pointer"
                  onClick={handleWhatsAppClick} // Click पर menu बंद हो
                />
              </li>
              <li>
                {!auth.user ? (
                  <VscAccount
                    onClick={() => {
                      onLoginClick();
                      setMenuOpen(false); // Login पर menu बंद हो
                    }}
                    className="text-3xl text-gray-700 cursor-pointer"
                  />
                ) : (
                  <NavLink
                    to="/login"
                    onClick={handleLogout} // Logout पर menu बंद हो
                    className="text-2xl font-semibold hover:text-primary transition duration-200"
                  >
                    Logout
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32">
        {/* Add your hero section or page content here */}
      </div>
    </div>
  );
};

export default Navbaar;
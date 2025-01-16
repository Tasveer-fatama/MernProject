import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth";
import Logo from "./assets/Logo.png"
const DropdownLinks = [
  {
    id: 1,
    name: "Completed projects",
    link: "/completedpro",
  },
  {
    id: 2,
    name: "Government Projects",
    link: "/governmentpro",
  },
  {
    id: 3,
    name: "Ongoing Commercial",
    link: "/ongoingpro",
  },
];

const DropdownLinks2 = [
  {
    id: 1,
    name: "The brand",
    link: "/brand",
  },
  {
    id: 2,
    name: "Our Mentor",
    link: "/mentor",
  },
  {
    id: 3,
    name: "Management",
    link: "/management",
  },
];

const Navbaar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth,setAuth] = useAuth()
  const handleLogout = () =>{
   setAuth({
    ...auth,
    user:null,
    token:''
   }) 
   localStorage.removeItem('auth')
   toast.success("Logout Successfully")
  }


  const phoneNumber = "919721080912"; // Replace with the desired phone number
  const message = "Hello! I would like to contact you."; // Optional message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
 return (
    <div >
      {/* Navbar */}
      <nav className="w-full bg-white  h-36 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-screen-xl mx-auto my-0 px-0 py-3 flex  justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src={Logo} alt="logo" style={{height:"150px",width:"auto"}} />
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="sm:hidden">
            <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row sm:items-center sm:static absolute top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none`}
          >
            <ul className="flex flex-col sm:flex-row items-center gap-4">
              {/* Static Links */}
              <li>
                <NavLink
                  to="/"
                  className="inline-block px-4 py-2 hover:text-primary  font-serif duration-200 "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="inline-block px-4 py-2 hover:text-primary font-serif  duration-200"
                >
                  Services
                </NavLink>
              </li>

              {/* Dropdown: About Us */}
              <li className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center font-serif  gap-[2px] py-2"
                >
                  About us
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks2.map((data) => (
                      <li key={data.id}>
                        <NavLink
                          to={data.link}
                          className="inline-block w-full rounded-md font-serif  p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Dropdown: Projects */}
              <li className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center font-serif  gap-[2px] py-2"
                >
                  Projects
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <NavLink
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 font-serif  hover:bg-primary/20"
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <div>
                <li>
                  <NavLink
                    to="/gallery"
                    className="inline-block px-4 py-2 hover:text-primary font-serif duration-200"
                  >
                    Gallery
                  </NavLink>
                </li>
              </div>
                <div>
                <li>
                  <a className="inline-block px-0 py-2 m-0 hover:text-primary duration-200">
                    <FaWhatsappSquare
                      style={{ fontSize: "40px", color: "gold" }}
                      onClick={handleWhatsAppClick}
                    />
                  </a>
                </li>
              </div> 
            <div>
           {!auth.user ? (<> <div>
                  <li>
                    <a className="inline-block px-0 py-2 m-0 hover:text-primary duration-200">
                      <VscAccount
                        onClick={onLoginClick}
                        style={{
                          fontSize: "35px",
                          color: "gold",
                          cursor: "pointer",
                        }}
                      />
                    </a>
                  </li>
                </div></>) : (<> <div>
                <li>
                  <NavLink
                     to="/login"
                    onClick={handleLogout}
                    className="inline-block px-4 py-2 hover:text-primary font-serif duration-200"
                  >
                    Logout
                  </NavLink>
                </li>
              </div></>) }
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer for Navbar height */}
      <div className="h-24"></div>
    </div>
  );
};

export default Navbaar;

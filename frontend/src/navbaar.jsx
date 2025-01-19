import React, { useState } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth";
import Logo from "./assets/Logo.png";

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
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const phoneNumber = "919721080912"; // Replace with the desired phone number
  const message = "Hello! I would like to contact you."; // Optional message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` ;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Navbar */}
      <nav
  className="w-full h-28 shadow-md fixed top-0 left-0 z-50"
  style={{
    backgroundImage:
      "url('https://images.squarespace-cdn.com/content/v1/6479484083027f25a6246fcb/6cf5527c-8eeb-4006-a790-df7efdd3157b/GGG+Website+graphic+upside.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto relative" style={{ top: "-40px" }}>
    {/* Logo */}
    <div className="flex items-center">
      <img
        src={Logo}
        alt="logo"
        style={{ height: "200px", width: "auto" }}
      />
    </div>

    {/* Hamburger Icon for small screens */}
    <div className="sm:hidden">
      <button
        className="text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
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
            className="inline-block px-4 hover:text-primary font-serif text-2xl duration-200"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="inline-block px-4 hover:text-primary font-serif text-2xl  duration-200"
          >
            Services
          </NavLink>
        </li>

        {/* Dropdown: About Us */}
        <li className="group relative cursor-pointer">
          <a
            href="#"
            className="flex items-center font-serif text-2xl  gap-[2px] py-2"
          >
            About us
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-2xl  text-black shadow-md">
            <ul>
              {DropdownLinks2.map((data) => (
                <li key={data.id}>
                  <NavLink
                    to={data.link}
                    className="inline-block w-full rounded-md font-serif hover:bg-primary/20"
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center font-serif text-2xl gap-[2px] py-2"
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

        {/* Other Links */}
        <li>
          <NavLink
            to="/gallery"
            className="inline-block px-4 hover:text-primary font-serif text-2xl  duration-200"
          >
            Gallery
          </NavLink>
        </li>

        {/* WhatsApp and Login Icons */}
        <li>
          <a
            className="inline-block px-0 m-0 hover:text-primary duration-200 text-2xl "
          >
            <FaWhatsappSquare
              style={{ fontSize: "40px", color: "#25D366" }}
              onClick={handleWhatsAppClick}
            />
          </a>
        </li>
        <li>
          {!auth.user ? (
            <VscAccount
              onClick={onLoginClick}
              style={{
                fontSize: "35px",
                color: "gold",
                cursor: "pointer",
              }}
            />
          ) : (
            <NavLink
              to="/login"
              onClick={handleLogout}
              className="inline-block px-4 hover:text-primary font-serif duration-200 text-2xl "
            >
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>



     
 </div>
  );
};

export default Navbaar;
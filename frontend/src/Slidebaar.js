import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Slidebaar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div>
      {/* Navigation Toggle */}
      <div className="py-4 w-full bg-white h-24 shadow-md fixed top-0 left-0 z-50 ">
        <button
          type="button"
          className="p-3 text-gray-800 rounded-lg hover:bg-gray-200"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        {/* Header */}
        <header className="p-4 flex justify-between items-center">
          <span className="font-bold text-xl text-black dark:text-white">
            Admin Panel
          </span>
          <button
            className="p-2 text-black dark:text-white hover:bg-gray-200 rounded-lg"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="block p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-white"
              >
                Dashboard
              </Link>
            </li>

            {/* Users Accordion */}
            <li>
              <Link
                to="/admin/completedprojectRoute"
                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-white"
                onClick={() => toggleMenu("users")}
              >
                ADDCompletedProject
                <span>{expandedMenu === "users" ? "▲" : "▼"}</span>
              </Link>
              {expandedMenu === "users" && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <a
                      href=""
                      className="block p-2 text-gray-600 rounded-lg hover:bg-black dark:text-neutral-300"
                    >
                      Sub Menu 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                      Sub Menu 2
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Projects Accordion */}
            <li>
              <button
                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-white"
                onClick={() => toggleMenu("projects")}
              >
                Completed Projects
                <span>{expandedMenu === "projects" ? "▲" : "▼"}</span>
              </button>
              {expandedMenu === "projects" && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <NavLink
                      to=""
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                      Project 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="//admin/create-category"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                      Project 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="//admin/create-category"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                      Project 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="//admin/create-category"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                      Project 4
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay to close sidebar when clicked outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

     
    </div>
  );
};

export default Slidebaar;

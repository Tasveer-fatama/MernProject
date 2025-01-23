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
      <div className="py-4 w-full bg-white h-24 shadow-md top-0 left-0 z-50 flex items-center justify-between md:hidden">
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
        className={`fixed top-0 left-0 h-screen w-96 bg-white border-r transition-transform transform overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 dark:bg-neutral-800 dark:border-neutral-700 md:translate-x-0 md:block`}
      >
        {/* Header */}
        <header className="p-4 flex justify-between items-center">
          <span className="font-bold text-xl text-black dark:text-white">
            Admin Panel
          </span>
          <button
            className="p-2 text-black dark:text-white hover:bg-gray-200 rounded-lg md:hidden"
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
                to="#"
                className="block p-2 text-gray-700 rounded-lg hover:bg-yellow-600 dark:text-white"
              >
              Welcome to the dashboard
              </Link>
            </li>

            {/* Users Accordion */}
            <li>
              <Link
                to=""
                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-yellow-600 dark:text-white"
                onClick={() => toggleMenu("users")}
              >
                ADD Completed Projects
                <span>{expandedMenu === "users" ? "▲" : "▼"}</span>
              </Link>
              {expandedMenu === "users" && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <a
                      href="/admin/completedprojectRoute"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-black dark:text-neutral-300"
                    >
                      ADD Commercial Project
</a>
                  </li>
                  <li>
                    <a
                      href="/admin/industrial"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Industrial Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/residential"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Residential Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/services"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                     ADD Services
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to=""
                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-yellow-600 dark:text-white"
                onClick={() => toggleMenu("users")}
              >
                ADD OnGoing Projects
                <span>{expandedMenu === "users" ? "▲" : "▼"}</span>
              </Link>
              {expandedMenu === "users" && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <a
                      href="/admin/completedprojectRoute"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-black dark:text-neutral-300"
                    >
                      ADD Commercial Project
</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Industrial Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Residential Project
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to=""
                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-yellow-600 dark:text-white"
                onClick={() => toggleMenu("users")}
              >
                ADD Completed Projects
                <span>{expandedMenu === "users" ? "▲" : "▼"}</span>
              </Link>
              {expandedMenu === "users" && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <a
                      href="/admin/completedprojectRoute"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-black dark:text-neutral-300"
                    >
                      ADD Commercial Project
</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Industrial Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 text-gray-600 rounded-lg hover:bg-gray-100 dark:text-neutral-300"
                    >
                       ADD Residential Project
                    </a>
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Slidebaar;
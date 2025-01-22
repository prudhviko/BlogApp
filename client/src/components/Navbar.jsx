import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { token, user, logout } = useContext(AuthContext);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-dark shadow-md text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link to="/">BlogApp</Link>
        </h1>

        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-gray-400">
              Create
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          {token ? (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-4 py-2 rounded-md focus:outline-none"
              >
                <img
                  src={`http://localhost:8000${user.profileImage}`}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                  <button
                    onClick={() => {
                      logout();
                      toggleDropdown();
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-white bg-gray-600 rounded-md"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

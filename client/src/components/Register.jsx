import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
import { registerUserApi } from "../api/userApi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    if (formData.profileImage) {
      formDataToSend.append("profileImage", formData.profileImage);
    }
    try {
      setLoading(true);
      await registerUserApi(formData);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-gray-light flex items-center justify-center">
          <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="profilePic"
                  className="block text-sm font-medium mb-2"
                >
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-dark text-white font-semibold py-2 rounded-md hover:bg-gray-700"
              >
                Register
              </button>
            </form>
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-gray-dark font-semibold hover:underline"
              >
                Go to Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;

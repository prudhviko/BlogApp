import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { token, loginUserHandler } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUserHandler(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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

          <button
            type="submit"
            className="w-full bg-gray-dark text-white font-semibold py-2 rounded-md hover:bg-gray-700"
          >
            Login
          </button>
        </form>

        {/* Don't have an account */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-gray-dark font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

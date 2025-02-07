import React, { createContext, useState, useEffect } from "react";
import { loginUserApi } from "../api/userApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (userData, userToken) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);
    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const loginUserHandler = async (credentials) => {
    const data = await loginUserApi(credentials);
    login(data.data.user, data.data.token);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loginUserHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

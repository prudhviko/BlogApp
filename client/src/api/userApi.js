import axiosInstance from "./axiosConfig";

export const registerUserApi = async (userData) => {
  const response = await axiosInstance.post("/users/register", userData);
  return response.data;
};

export const loginUserApi = async (credentials) => {
  const response = await axiosInstance.post("/users/login", credentials);
  return response.data;
};

export const getProfileApi = async () => {
  const response = await axiosInstance.get("/users/auth-required/profile");
  return response.data;
};

export const updateProfileApi = async (profileData) => {
  const response = await axiosInstance.put(
    "/users/auth-required/update-profile",
    profileData
  );
  return response.data;
};

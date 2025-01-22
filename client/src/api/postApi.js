import axiosInstance from "./axiosConfig";

export const addPostApi = async (postData) => {
  const response = await axiosInstance.post("/posts/auth-required/", postData);
  return response.data;
};

export const deletePostApi = async (postId) => {
  const response = await axiosInstance.delete(`/posts/auth-required/${postId}`);
  return response.data;
};

export const updatePostApi = async (postId, updatedData) => {
  const response = await axiosInstance.put(
    `/posts/auth-required/${postId}`,
    updatedData
  );
  return response.data;
};

export const fetchPostsApi = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getPost = async (postId) => {
  const response = await axiosInstance.get(`/posts/auth-required/${postId}`);
  return response.data;
};

import axiosInstance from "./axiosConfig";

export const addCommentApi = async (postId, comment) => {
  const response = await axiosInstance.post(
    `/comments/auth-required/${postId}`,
    comment
  );
  return response.data;
};

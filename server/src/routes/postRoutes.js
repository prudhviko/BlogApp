import express from "express";
import {
  getAllPosts,
  createPost,
  editPost,
  deletePost,
  getSinglePost,
} from "../controllers/postController.js";
import upload from "../middlewares/upload.js";
import authMiddleware from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/auth-required/:id", authMiddleware, getSinglePost);
postRouter.post(
  "/auth-required",
  upload.single("image"),
  authMiddleware,
  createPost
);
postRouter.put("/auth-required/:id", editPost);
postRouter.delete("/auth-required/:id", deletePost);

export default postRouter;

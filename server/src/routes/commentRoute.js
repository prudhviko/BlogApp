import express from "express";
import { addComment } from "../controllers/commentController.js";
import authMiddleware from "../middlewares/auth.js";

const commentRouter = express.Router();

commentRouter.post("/auth-required/:commentedOn", authMiddleware, addComment);

export default commentRouter;

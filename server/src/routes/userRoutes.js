import express from "express";
import {
  register,
  login,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import upload from "../middlewares/upload.js";

const userRouter = express.Router();

userRouter.post("/register", upload.single("profileImage"), register);

userRouter.post("/login", login);
userRouter.get("/auth-required/profile", getProfile);
userRouter.put("/auth-required/update-profile", updateProfile);

export default userRouter;

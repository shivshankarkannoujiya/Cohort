import express from "express";
import { registerUser, verifyUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/verify/:token").get(verifyUser);

export default router;

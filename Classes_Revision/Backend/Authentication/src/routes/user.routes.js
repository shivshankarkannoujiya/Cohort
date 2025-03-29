import express from "express";
import { loginUser, registerUser, verifyUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route(`/register`).post(registerUser);
router.route(`/verify/:token`).post(verifyUser);
router.route(`/login`).post(loginUser);

export default router;

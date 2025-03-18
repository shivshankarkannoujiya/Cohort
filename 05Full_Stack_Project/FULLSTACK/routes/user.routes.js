import express from "express";
import {
    loginUser,
    registerUser,
    verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/verify/:token").get(verifyUser);
router.route("/login").post(loginUser);

export default router;

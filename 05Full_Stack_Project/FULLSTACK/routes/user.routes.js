import express from "express";
import {
    forgotPassword,
    getMe,
    loginUser,
    logoutUser,
    registerUser,
    resetPassword,
    verifyUser,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";



const router = express.Router();

router.route("/register").post(registerUser);
router.route("/verify/:token").get(verifyUser);
router.route("/login").post(loginUser);
router.route("/me").get(isLoggedIn, getMe);
router.route("/logout").get(isLoggedIn, logoutUser);


export default router;

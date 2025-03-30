import express from "express";
import {
    getProfile,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    verifyUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route(`/register`).post(registerUser);
router.route(`/verify/:token`).post(verifyUser);
router.route(`/login`).post(loginUser);
router.route(`/refresh-token`, refreshAccessToken);

// protected routes
router.route(`/me`).get(isLoggedIn, getProfile);
router.route(`/logout`).post(isLoggedIn, logoutUser);


export default router;

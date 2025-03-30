import express from "express";
import {
    changeCurrentPassword,
    getProfile,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    verifyUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route(`/register`).post(registerUser);
router.route(`/verify/:token`).post(verifyUser);
router.route(`/login`).post(loginUser);
router.route(`/refresh-token`).get(refreshAccessToken);

// protected routes
router.route(`/me`).get(isLoggedIn, getProfile);
router.route(`/logout`).post(isLoggedIn, logoutUser);
router.route(`/change-pass`).post(isLoggedIn, changeCurrentPassword);
router.route(`/update-account`).post(isLoggedIn, updateAccountDetails);

export default router;

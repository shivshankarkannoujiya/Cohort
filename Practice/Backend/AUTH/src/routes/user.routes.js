import express from "express";
import {
    changeCurrentPassword,
    getMe,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccoutDetails,
    verifyUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/verify/:token").get(verifyUser);
router.route("/login").post(loginUser);

// secured route
router.route("/logout").get(isLoggedIn, logoutUser);
router.route("/me").get(isLoggedIn, getMe);
router.route("/refresh-token").get(refreshAccessToken);
router.route("/changepass").post(changeCurrentPassword);
router.route("/updateAccount").post(updateAccoutDetails);

export default router;

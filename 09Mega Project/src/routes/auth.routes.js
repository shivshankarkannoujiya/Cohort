import express from "express";
import {
    changeCurrentPassword,
    forgotPasswordRequest,
    getCurrentUser,
    loginUser,
    logOutUser,
    refreshAccessToken,
    registerUser,
    resendVerificationEmail,
    resetForgottenPassword,
    updateAccountDetails,
    verifyEmail,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userLoginValidator,
    userRegistrationValidator,
    userResetForgottenPasswordValidator,
    userUpdateAccountDetailsValidator,
} from "../validators/auth.validators.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
    @description Unprotected Routes
 */
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
    ]),
    userRegistrationValidator(),
    validate,
    registerUser,
);

router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/verify-email/:emailVerificationToken").post(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
    .route("/forgot-password")
    .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);

router
    .route("/reset-password/:resetToken")
    .post(
        userResetForgottenPasswordValidator(),
        validate,
        resetForgottenPassword,
    );

/** 
@description protected Routes
*/
router.route("/logout").post(isLoggedIn, logOutUser);
router
    .route("/resend-verification-email")
    .post(isLoggedIn, resendVerificationEmail);
router
    .route("/change-password")
    .post(
        isLoggedIn,
        userChangeCurrentPasswordValidator(),
        validate,
        changeCurrentPassword,
    );

router
    .route("/update-account")
    .put(
        isLoggedIn,
        userUpdateAccountDetailsValidator(),
        validate,
        updateAccountDetails,
    );

router.route("/me").get(isLoggedIn, getCurrentUser);

export default router;

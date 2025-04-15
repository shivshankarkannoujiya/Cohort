import { body } from "express-validator";
import { AvailableUserRoles } from "../utils/constants.js";

const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is Invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("username is required")
            .isLength({ min: 3 })
            .withMessage("username should be atleast 3 char")
            .isLength({ max: 13 })
            .withMessage("username cannot exceed 13 char"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("password is required")
            .isLength({ min: 6 })
            .withMessage("Password should be atleast 6 char"),
        body("role")
            .optional()
            .isIn(AvailableUserRoles)
            .withMessage("Invalid user role"),
    ];
};

const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Email is not valid"),
        body("username").optional(),
        body("password").notEmpty().withMessage("Password can not be empty"),
    ];
};

const userChangeCurrentPasswordValidator = () => {
    return [
        body("oldPassword").notEmpty().withMessage("Old password is required"),
        body("newPassword").notEmpty().withMessage("New password is required"),
    ];
};

const userForgotPasswordValidator = () => {
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is Invalid"),
    ];
};

const userResetForgottenPasswordValidator = () => {
    return [
        body("newPassword").notEmpty().withMessage("New password is required"),
    ];
};

const userAssignRoleValidator = () => {
    return [
        body("role")
            .optional()
            .isIn(AvailableUserRoles)
            .withMessage("Invalid user role"),
    ];
};

export {
    userRegistrationValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userResetForgottenPasswordValidator,
    userAssignRoleValidator,
};

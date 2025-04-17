import { body, param } from "express-validator";
import { AvailableUserRoles } from "../utils/constants.js";

const createdProjectValidator = () => {
    return [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("project name is required")
            .isLength({ min: 2 })
            .withMessage("project name should be atleast 2 char"),
        body("description").optional(),
    ];
};

const getProjectByIDValidator = () => {
    return [
        param("id")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
    ];
};

const updateProjectValidator = () => {
    return [
        param("id")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        body("name")
            .trim()
            .notEmpty()
            .withMessage("project name is required")
            .isLength({ min: 2 })
            .withMessage("project name should be atleast 2 char"),
        body("description").optional(),
    ];
};

const deleteProjectValidator = () => {
    return [
        param("id")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
    ];
};

const addMemberToProjectValidator = () => {
    return [
        body("projectId")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        body("email")
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .withMessage("Email is Invalid"),
        body("role")
            .optional()
            .isIn(AvailableUserRoles)
            .withMessage("Invalid role"),
    ];
};

const getProjectMembersValidator = () => {
    return [
        param("projectId")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
    ];
};

const updateProjectMembersValidator = () => {
    return [
        body("projectId")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        body("oldUserId")
            .notEmpty()
            .withMessage("old User id is required")
            .isMongoId()
            .withMessage("Invalid old User id "),
        body("newUserId")
            .notEmpty()
            .withMessage("new user id is required")
            .isMongoId()
            .withMessage("Invalid new user id"),
    ];
};

const updateMemberRoleValidator = () => {
    return [
        param("projectId")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        param("userId")
            .notEmpty()
            .withMessage("user id is required")
            .isMongoId()
            .withMessage("Invalid user id"),
        body("role")
            .optional()
            .isIn(AvailableUserRoles)
            .withMessage("Invalid user role"),
    ];
};

const deleteMemberValidator = () => {
    return [
        param("projectId")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        param("userId")
            .notEmpty()
            .withMessage("user id is required")
            .isMongoId()
            .withMessage("Invalid user id"),
    ];
};

export {
    createdProjectValidator,
    getProjectByIDValidator,
    updateProjectValidator,
    deleteProjectValidator,
    addMemberToProjectValidator,
    getProjectMembersValidator,
    updateProjectMembersValidator,
    updateMemberRoleValidator,
    deleteMemberValidator,
};

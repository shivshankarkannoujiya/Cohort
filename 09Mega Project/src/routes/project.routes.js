import { Router } from "express";
import {
    isAdminOfProject,
    isLoggedIn,
    isMemberOfProject,
    isProjectAdminOrAdmin,
} from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";

import {
    addMemberToProject,
    createProject,
    deleteMember,
    deleteProject,
    getProject,
    getProjectByID,
    getProjectMembers,
    updateMemberRole,
    updateProject,
    updateProjectMembers,
} from "../controllers/project.controller.js";
import {
    addMemberToProjectValidator,
    createdProjectValidator,
    deleteMemberValidator,
    deleteProjectValidator,
    getProjectByIDValidator,
    getProjectMembersValidator,
    updateMemberRoleValidator,
    updateProjectMembersValidator,
    updateProjectValidator,
} from "../validators/project.validators.js";

const router = Router();

/**
 @description Project Routes
 */
router
    .route("/create")
    .post(isLoggedIn, createdProjectValidator(), validate, createProject);

router.route("/projects").get(isLoggedIn, getProject);

router
    .route("/getProject/:id")
    .get(
        isLoggedIn,
        getProjectByIDValidator(),
        validate,
        isMemberOfProject,
        getProjectByID,
    );

router
    .route("/update-project/:projectId")
    .put(
        isLoggedIn,
        updateProjectValidator(),
        validate,
        isProjectAdminOrAdmin,
        updateProject,
    );

router
    .route("/delete-project/:projectId")
    .delete(
        isLoggedIn,
        deleteProjectValidator(),
        validate,
        isAdminOfProject,
        deleteProject,
    );

router
    .route("/addMember")
    .post(
        isLoggedIn,
        addMemberToProjectValidator(),
        validate,
        isAdminOfProject,
        addMemberToProject,
    );

router
    .route("/project-members/:projectId")
    .get(
        isLoggedIn,
        getProjectMembersValidator(),
        validate,
        isProjectAdminOrAdmin,
        getProjectMembers,
    );

router
    .route("/update-member")
    .post(
        isLoggedIn,
        updateProjectMembersValidator(),
        validate,
        isAdminOfProject,
        updateProjectMembers,
    );

router
    .route("/update-member-role/:projectId/:userId")
    .post(
        isLoggedIn,
        updateMemberRoleValidator(),
        validate,
        isAdminOfProject,
        updateMemberRole,
    );

router
    .route("/deleteMember/:projectId/:userId")
    .delete(
        isLoggedIn,
        deleteMemberValidator(),
        validate,
        isAdminOfProject,
        deleteMember,
    );

export default router;

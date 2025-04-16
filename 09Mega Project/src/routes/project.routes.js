import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
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
} from "../controllers/project.controller";
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
 @description Protected Routes
 */
router
    .route("/create-project")
    .post(isLoggedIn, createdProjectValidator(), validate, createProject);

router.route("/project").get(isLoggedIn, getProject);

router
    .route("/getProject/:id")
    .get(isLoggedIn, getProjectByIDValidator(), validate, getProjectByID);

router
    .route("/update-project/:id")
    .put(isLoggedIn, updateProjectValidator(), validate, updateProject);

router
    .route("/delete-project/:id")
    .delete(isLoggedIn, deleteProjectValidator(), validate, deleteProject);

router
    .route("/addMember")
    .post(
        isLoggedIn,
        addMemberToProjectValidator(),
        validate,
        addMemberToProject,
    );

router
    .route("/project-members/:projectId")
    .post(
        isLoggedIn,
        getProjectMembersValidator(),
        validate,
        getProjectMembers,
    );

router
    .route("/update-project-member")
    .post(
        isLoggedIn,
        updateProjectMembersValidator(),
        validate,
        updateProjectMembers,
    );

router
    .route("/update-member-role")
    .post(isLoggedIn, updateMemberRoleValidator(), validate, updateMemberRole);

router
    .route("/deleteMember/:userId/:projectId")
    .delete(isLoggedIn, deleteMemberValidator(), validate, deleteMember);

export default router;

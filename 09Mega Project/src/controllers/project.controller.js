import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

const createProject = asyncHandler(async (req, res) => {});
const getProject = asyncHandler(async (req, res) => {});
const getProjectByID = asyncHandler(async (req, res) => {});
const updateProject = asyncHandler(async (req, res) => {});
const deleteProject = asyncHandler(async (req, res) => {});
const addMemberToProject = asyncHandler(async (req, res) => {});
const getProjectMembers = asyncHandler(async (req, res) => {});
const updateProjectMembers = asyncHandler(async (req, res) => {});
const updateMemberRole = asyncHandler(async (req, res) => {});
const deleteMember = asyncHandler(async (req, res) => {});

export {
    createProject,
    getProject,
    getProjectByID,
    updateProject,
    deleteProject,
    addMemberToProject,
    getProjectMembers,
    updateProjectMembers,
    updateMemberRole,
    deleteMember,
};

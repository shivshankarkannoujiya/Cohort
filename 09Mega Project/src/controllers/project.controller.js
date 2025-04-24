import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectmember.models.js";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";

const createProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const userId = req.user?._id;

    const existedProject = await Project.findOne({ name });
    if (existedProject) {
        throw new ApiError(401, "Project with this name already exist");
    }

    const project = await Project.create({
        name,
        description,
        createdBy: userId,
    });

    const createdProject = await Project.findById(project._id);
    if (!createdProject) {
        throw new ApiError(
            404,
            "Something went wrong while creating the project",
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                createdProject,
                "Project created Successfully",
            ),
        );
});

const getProject = asyncHandler(async (_, res) => {
    const projects = await Project.find();
    if (!projects) {
        throw new ApiError(404, "No project exists");
    }
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { projects: projects },
                "Project fetched Successfully",
            ),
        );
});

const getProjectByID = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new ApiError(400, "id is required");
    }

    const project = await Project.findById(id).populate(
        "createdBy",
        "fullname email",
    );
    if (!project) {
        throw new ApiError(404, "Invalid id");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, project, "project fetched Successfully"));
});

const updateProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const { projectId } = req.params;
    if (!projectId) {
        throw new ApiError(400, "Id is required");
    }

    const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        {
            $set: {
                name,
                description,
            },
        },
        { new: true },
    );

    if (!updatedProject) {
        throw new ApiError("Project not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                updatedProject,
                "Project updated successfully",
            ),
        );
});

const deleteProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);
    if (!project) {
        throw new ApiError(404, "Project not found");
    }

    await project.deleteOne();

    return res
        .status(200)
        .json(
            new ApiResponse(200, deletedProject, "Prject deleted Successfully"),
        );
});

const addMemberToProject = asyncHandler(async (req, res) => {
    const { projectId, email, role } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
        throw new ApiError(404, "Project not found");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    //Check if user is already a member
    const existingProjectMember = await ProjectMember.findOne({
        user: user._id,
        project: projectId,
    });

    if (existingProjectMember) {
        throw new ApiError(400, "User is already mamber of this project");
    }

    //Create a new entry in ProjectMember
    const newMember = await ProjectMember.create({
        user: user._id,
        project: projectId,
        role: role || UserRolesEnum.MEMBER,
    });

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                newMember,
                "User added to the project successfully",
            ),
        );
});

const getProjectMembers = asyncHandler(async (req, res) => {
    const { projectId } = req.params;

    if (!projectId) {
        throw new ApiError(400, "projectId is required");
    }

    // TODO: Check if the project exist with particular projectID
    const isProjectExist = await Project.exists({ _id: projectId });
    if (!isProjectExist) {
        throw new ApiError(404, "Invalid projectId");
    }

    const members = await ProjectMember.find({ project: projectId })
        .populate("user", "fullname email")
        .select("-project");

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                members,
                "Project members fetched Successfully",
            ),
        );
});

const updateProjectMembers = asyncHandler(async (req, res) => {
    const { projectId, oldUserId, newUserId } = req.body;

    if (oldUserId === newUserId) {
        throw new ApiError(400, "Old and new user can not be the same");
    }

    // Check if the oldMember exist
    const existingMember = await ProjectMember.findOne({
        project: projectId,
        user: oldUserId,
    });

    if (!existingMember) {
        throw new ApiError(404, "Old member not found in this project");
    }

    // Check if new user is already a member
    const duplicateMember = await ProjectMember.findOne({
        project: projectId,
        user: newUserId,
    });

    if (duplicateMember) {
        throw new ApiError(409, "New user is already member of this project");
    }

    // update the user/Member
    existingMember.user = newUserId;
    await existingMember.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(new ApiResponse(200, "Project Member updated Successfully"));
});

const updateMemberRole = asyncHandler(async (req, res) => {
    const { projectId, userId } = req.params;
    const { role } = req.body;

    if (!role || !AvailableUserRoles.includes(role)) {
        throw new ApiError(400, "Invalid user role");
    }

    // Find the project member
    const projectMember = await ProjectMember.findOne({
        project: projectId,
        user: userId,
    });

    if (!projectMember) {
        throw new ApiError(404, "project member does not exist");
    }

    projectMember.role = role;
    await projectMember.save({ validateBeforeSave: false });

    const populatedMember = await projectMember.populate(
        "user",
        "username email",
    );

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                populatedMember,
                "Member role updated Successfully",
            ),
        );
});

const deleteMember = asyncHandler(async (req, res) => {
    const { projectId, userId } = req.params;

    const deletedProjectMember = await ProjectMember.findOneAndDelete({
        user: userId,
        project: projectId,
    });

    if (!deletedProjectMember) {
        throw new ApiError(404, "Project member not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                deletedProjectMember,
                "Project member deleted Successfully",
            ),
        );
});

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

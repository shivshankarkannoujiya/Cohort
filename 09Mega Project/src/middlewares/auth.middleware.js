import { ProjectMember } from "../models/projectmember.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { UserRolesEnum } from "../utils/constants.js";
import jwt from "jsonwebtoken";

const isLoggedIn = asyncHandler(async (req, _, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?.id).select(
            "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
        );

        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new ApiError(401, "Access token expired");
        } else if (error.name === "JsonWebTokenError") {
            throw new ApiError(401, "Invalid access token");
        } else {
            console.log("ERR: ", error);
            throw new ApiError(401, error?.message || "Invalid access token");
        }
    }
});

const isAdminOfProject = asyncHandler(async (req, _, next) => {
    const { projectId } = req.body || req.params;
    const userId = req.user?._id;

    if (!projectId) {
        throw new ApiError(400, "project Id is required");
    }

    const member = await ProjectMember.findOne({
        project: projectId,
        user: userId,
    });

    if (!member || member.role !== UserRolesEnum.ADMIN) {
        throw new ApiError(403, "Only project admin can perform this action");
    }
    next();
});

const isProjectAdminOrAdmin = asyncHandler(async (req, _, next) => {
    const { projectId } = req.body || req.params;
    const userId = req.user?._id;

    if (!projectId) {
        throw new ApiError(400, "Project Id is required");
    }

    const member = await ProjectMember.findOne({
        project: projectId,
        user: userId,
    });

    if (
        !member ||
        (member.role !== UserRolesEnum.PROJECT_ADMIN &&
            member.role !== UserRolesEnum.ADMIN)
    ) {
        throw new ApiError(
            403,
            "Only Admin or Project Admin can perform this action",
        );
    }

    next();
});

const isMemberOfProject = asyncHandler(async (req, _, res) => {
    const { projectId } = req.body || req.params;
    const userId = req.user?._id;

    if (!projectId) {
        throw new ApiError(400, "Project Id is required");
    }

    const member = await ProjectMember.findOne({
        project: projectId,
        user: userId,
    });

    if (!member) {
        throw new ApiError(403, "You are member of this project");
    }

    next();
});

export {
    isLoggedIn,
    isAdminOfProject,
    isProjectAdminOrAdmin,
    isMemberOfProject,
};

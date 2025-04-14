import mongoose from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";

const projectmemberSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },

        role: {
            type: String,
            enum: AvailableUserRoles,
            default: UserRolesEnum.MEMBER,
        },
    },
    { timestamps: true },
);
export const ProjectMember = mongoose.model(
    "ProjectMember",
    projectmemberSchema,
);

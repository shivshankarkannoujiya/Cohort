import mongoose, { Promise } from "mongoose";
import { Task } from "./task.models.js";
import { ProjectNote } from "./note.models.js";
import { ProjectMember } from "./projectmember.models.js";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        description: {
            type: String,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true },
);

projectSchema.pre(
    "deleteOne",
    { document: true, query: true },
    async function (next) {
        const projectId = this._id;
        await Promise.all([
            Task.deleteMany({ project: projectId }),
            ProjectMember.deleteMany({ project: projectId }),
            ProjectNote.deleteMany({ project: projectId }),
        ]);
        next();
    },
);

export const Project = mongoose.model("Project", projectSchema);

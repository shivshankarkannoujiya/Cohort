import mongoose from "mongoose";
import { Task } from "../models/task.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import path from "path";

const createTask = asyncHandler(async (req, res) => {
    const { title, description, project, assignedTo, assignedBy, status } =
        req.body;

    const existingTask = await Task.findOne({ title });
    if (existingTask) {
        throw new ApiError(400, "Task with this title already exist");
    }

    const attachmentsLocalPath = path.resolve(req.files?.attachment[0]?.path);
    const attachment = await uploadOnCloudinary(attachmentsLocalPath);

    const newTask = await Task.create({
        title,
        description,
        project,
        assignedTo,
        assignedBy,
        status: status || TaskStatusEnum.TODO,
        attatchments: [
            {
                url: attachment.secure_url,
                memeType: attachment.memeType,
                size: attachment.size,
            },
        ],
    });

    const createdTask = await Task.findById(newTask._id)
        .populate("project", "name")
        .populate("assignedTo", "username email")
        .populate("assignedBy", "username email");

    if (!createdTask) {
        throw new ApiError(400, "Failed to create Task");
    }

    return res
        .status(201)
        .json(new ApiResponse(201, createdTask, "Task created Successfully"));
});

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
        .populate("project", "name  _id")
        .populate("assignedTo", "username email _id")
        .populate("assignedBy", "username email _id");

    if (tasks.length === 0) {
        throw new ApiError(404, "Tasks not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, tasks, "Tasks fetched Successfully"));
});

const getTaskById = asyncHandler(async (req, res) => {
    const { taskId } = req.params;

    if (!taskId) {
        throw new ApiError(401, "taskId is required");
    }

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Task Id is Invalid");
    }

    const task = await Task.findById(taskId)
        .populate("project", "name  _id")
        .populate("assignedTo", "username email _id")
        .populate("assignedBy", "username email _id");

    if (!task) {
        throw new ApiError(404, "Task with this id not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, task, "Task fetched Successfully"));
});

const updateTask = asyncHandler(async (req, res) => {
    const { title, description, status } = req.body;
    const { taskId } = req.params;

    if (!AvailableTaskStatuses.includes(status)) {
        throw new ApiError(401, "Invalid status");
    }

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Invalid task Id");
    }

    const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        {
            $set: {
                title,
                description,
                status,
            },
        },
        { new: true },
    )
        .populate("project", "name  _id")
        .populate("assignedTo", "username email _id")
        .populate("assignedBy", "username email _id");

    if (!updatedTask) {
        throw new ApiError(400, "Failed to update Task");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedTask, "Task updated Successfully"));
});

const deleteTask = asyncHandler(async (req, res) => {
    const { taskId } = req.params;
    if (!taskId) {
        throw new ApiError(401, "task Id is required");
    }

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Invalid taskId");
    }

    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
        throw new ApiError(404, "Task not found or already deleted");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, deletedTask, "Task deleted Successfully"));
});

export { createTask, deleteTask, getTaskById, getTasks, updateTask };

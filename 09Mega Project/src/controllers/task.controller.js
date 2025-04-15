import mongoose from "mongoose";
import { Task } from "../models/task.models.js";
import { SubTask } from "../models/subtask.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js";

const createTask = asyncHandler(async (req, res) => {
    const { title, description, project, assignedTo, assignedBy, status } =
        req.body;

    const existingTask = await Task.findOne({ title });
    if (existingTask) {
        throw new ApiError(400, "Task with this title already exist");
    }

    // TODO: Handle attatchments
    const newTask = await Task.create({
        title,
        description,
        project,
        assignedTo,
        assignedBy,
        status: status || TaskStatusEnum.TODO,
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

const createSubTask = asyncHandler(async (req, res) => {
    const { title, task, isCompleted, createdBy } = req.body;

    const existingSubTask = await SubTask.findOne({ title, task });
    if (existingSubTask) {
        throw new ApiError(400, "subTask with this title already exist");
    }

    if ([task, createdBy].every(mongoose.Types.ObjectId.isValid)) {
        throw new ApiError(400, "Invalid task or user Id");
    }

    const newSubTask = await SubTask.create({
        title,
        task,
        createdBy,
        isCompleted,
    });

    const createdNewSubTask = await SubTask.findById(newSubTask._id)
        .populate("task", "title")
        .populate("createdBy", "username");

    if (!createdNewSubTask) {
        throw new ApiError(404, "Failed to create sub task");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                createdNewSubTask,
                "Sub Task created Successfully",
            ),
        );
});

const updateSubTask = asyncHandler(async (req, res) => {
    const { title, isCompleted } = req.body;
    const { subTaskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(subTaskId)) {
        throw new ApiError(400, "Invalid subTaskId");
    }

    const subTask = await SubTask.findById(subTaskId);
    if (!subTask) {
        throw new ApiError(400, "subtask does not exist or invalid subtaskId");
    }

    /** 
     @description
     If the user is only updating `isCompleted`, `task`, or `createdBy`, and leaves the title out of the request,
          then title === undefined
          there's no need to check for duplicates
          so we skip the whole duplicate check
    */

    if (title) {
        const existingSubTask = await SubTask.findOne({
            _id: { $ne: subTaskId },
            title,
            task: subTask.task,
        });

        if (existingSubTask) {
            throw new ApiError(
                400,
                "SubTask title already exists for this task",
            );
        }
    }

    const updatedSubTask = await SubTask.findByIdAndUpdate(
        subTaskId,
        {
            $set: {
                title,
                isCompleted,
            },
        },
        { new: true },
    );

    if (!updatedSubTask) {
        throw new ApiError(404, "Failed to update SubTask");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                updatedSubTask,
                "SubTask updated Successfully",
            ),
        );
});

const deleteSubTask = asyncHandler(async (req, res) => {
    const { subTaskId } = req.params;
    if (!subTaskId) {
        throw new ApiError(400, "subTaskId is required");
    }
    if (!mongoose.Types.ObjectId.isValid(subTaskId)) {
        throw new ApiError(400, "Invalid subTaskId");
    }

    const deletedSubTask = await SubTask.findByIdAndDelete(subTaskId);
    if (!deletedSubTask) {
        throw new ApiError(
            404,
            "Failed to delete subtask or subtask already deleted",
        );
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                deletedSubTask,
                "Sub Task deleted Successfully",
            ),
        );
});

export {
    createTask,
    deleteTask,
    getTaskById,
    getTasks,
    updateTask,
    createSubTask,
    updateSubTask,
    deleteSubTask,
};

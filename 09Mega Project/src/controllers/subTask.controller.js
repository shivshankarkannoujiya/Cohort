import mongoose from "mongoose";
import { SubTask } from "../models/subtask.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

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

export { createSubTask, updateSubTask, deleteSubTask };

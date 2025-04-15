import mongoose from "mongoose";
import { ProjectNote } from "../models/note.models.js";
import { Project } from "../models/project.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const createNote = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const { projectId } = req.params;
    const userId = req.user?._id;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new ApiError(400, "Invalid proejct Id");
    }

    const projectNote = await ProjectNote.create({
        project: projectId,
        createdBy: userId,
        content: content.trim(),
    });

    const createdProjectNote = await ProjectNote.findById(projectNote._id)
        .populate("project")
        .populate("createdBy", "username email");

    if (!createdProjectNote) {
        throw new ApiError(404, "project note not created");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                createdProjectNote,
                "project note created successfully",
            ),
        );
});

const getNotes = asyncHandler(async (req, res) => {
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new ApiError(400, "Invalid project Id");
    }

    const projectExist = await Project.findById(projectId);
    if (!projectExist) {
        throw new ApiError(404, "Project not found");
    }

    const notes = await ProjectNote.find({ project: projectId })
        .populate("createdBy", "username email")
        .populate("project", "name")
        .sort({ createdAt: -1 });

    if (notes.length === 0) {
        throw new ApiError(404, "No notes found for this project.");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, notes, "notes fetched Successfully"));
});

const getNoteById = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    if (!noteId) {
        throw new ApiError(401, "noteId is required");
    }

    const note = await ProjectNote.findById(noteId)
        .populate("createdBy", "username email")
        .populate("project");

    if (!note) {
        throw new ApiError(404, "note does not exist");
    }

    return res
        .status(200)
        .json(ApiResponse(200, note, "note fetched Successfully"));
});

const updateNote = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const { noteId } = req.params;
    if (!noteId) {
        throw new ApiError(401, "note Id is required");
    }

    const updatedNote = await ProjectNote.findByIdAndUpdate(
        noteId,
        {
            $set: {
                content,
            },
        },
        { new: true },
    )
        .populate("createdBy", "username email")
        .populate("project");

    if (!updatedNote) {
        throw new ApiError(404, "Note not found or update failed");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedNote, "note updated Successfully"));
});

const deleteNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        throw new ApiError(400, "Invalid note ID");
    }

    const deletedNote = await ProjectNote.findByIdAndDelete(noteId);
    if (!deletedNote) {
        throw new ApiError(404, "Note not found or already deleted");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, deletedNote, "Note deleted Successfully"));
});

export { createNote, deleteNote, getNoteById, getNotes, updateNote };

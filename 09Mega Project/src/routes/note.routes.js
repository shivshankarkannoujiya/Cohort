import { Router } from "express";
import {
    isLoggedIn,
    isMemberOfProject,
    isProjectAdminOrAdmin,
} from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
    createNote,
    deleteNote,
    getNoteById,
    getNotes,
    updateNote,
} from "../controllers/note.controller.js";
import {
    createNoteValidator,
    deletedNoteValidator,
    getNoteByIdValidator,
    getNoteValidators,
    updateNoteValidator,
} from "../validators/note.validators.js";

const router = Router();

router
    .route("/createnote/:projectId")
    .post(
        isLoggedIn,
        createNoteValidator(),
        validate,
        isProjectAdminOrAdmin,
        createNote,
    );

router
    .route("/notes/:projectId")
    .get(
        isLoggedIn,
        getNoteValidators(),
        validate,
        isMemberOfProject,
        getNotes,
    );

router
    .route("/note/:noteId")
    .get(
        isLoggedIn,
        getNoteByIdValidator(),
        validate,
        isMemberOfProject,
        getNoteById,
    );

router
    .route("/updatenote/:noteId")
    .put(
        isLoggedIn,
        updateNoteValidator(),
        validate,
        isProjectAdminOrAdmin,
        updateNote,
    );

router
    .route("/deletenote/:noteId")
    .delete(
        isLoggedIn,
        deletedNoteValidator(),
        validate,
        isProjectAdminOrAdmin,
        deleteNote,
    );

export default router;

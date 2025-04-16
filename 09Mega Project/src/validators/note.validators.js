import { body, param } from "express-validator";

const createNoteValidator = () => {
    return [
        param("projectId")
            .notEmpty()
            .withMessage("Project Id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
        body("content")
            .trim()
            .notEmpty()
            .withMessage("content is required")
            .isLength({ min: 1 })
            .withMessage("content cannot be empty"),
    ];
};

const getNoteValidators = () => {
    return [
        param("projectId")
            .notEmpty()
            .withMessage("Project Id is required")
            .isMongoId()
            .withMessage("Invalid project Id"),
    ];
};

const getNoteByIdValidator = () => {
    return [
        param("noteId")
            .notEmpty()
            .withMessage("Note Id is required")
            .isMongoId()
            .withMessage("Invalid Note Id"),
    ];
};

const updateNoteValidator = () => {
    return [
        param("noteId")
            .notEmpty()
            .withMessage("Note Id is required")
            .isMongoId()
            .withMessage("Invalid Note Id"),
        body("content")
            .trim()
            .notEmpty()
            .withMessage("content is required")
            .isLength({ min: 1 })
            .withMessage("content cannot be empty"),
    ];
};

const deletedNoteValidator = () => {
    return [
        param("noteId")
            .notEmpty()
            .withMessage("Note Id is required")
            .isMongoId()
            .withMessage("Invalid Note Id"),
    ];
};

export {
    createNoteValidator,
    getNoteValidators,
    getNoteByIdValidator,
    updateNoteValidator,
    deletedNoteValidator,
};

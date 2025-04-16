import { body, param } from "express-validator";

const createSubTaskValidator = () => {
    return [
        body("title").trim().notEmpty().withMessage("Title is required"),

        body("task")
            .notEmpty()
            .withMessage("Task ID is required")
            .isMongoId()
            .withMessage("Invalid Task ID"),

        body("createdBy")
            .notEmpty()
            .withMessage("User ID is required")
            .isMongoId()
            .withMessage("Invalid User ID"),

        body("isCompleted")
            .optional()
            .isBoolean()
            .withMessage("isCompleted must be a boolean"),
    ];
};

const updateSubTaskValidator = () => {
    return [
        body("title").trim().notEmpty().withMessage("Title is required"),
        body("isCompleted")
            .optional()
            .isBoolean()
            .withMessage("isCompleted must be a boolean"),
        param("subTaskId")
            .notEmpty()
            .withMessage("subtask id is required")
            .isMongoId()
            .withMessage("Invalid subtask id"),
    ];
};

const deleteSubTaskValidator = () => {
    return [
        param("subTaskId")
            .notEmpty()
            .withMessage("subtask id is required")
            .isMongoId()
            .withMessage("Invalid subtask id"),
    ];
};

export {
    createSubTaskValidator,
    updateSubTaskValidator,
    deleteSubTaskValidator,
};

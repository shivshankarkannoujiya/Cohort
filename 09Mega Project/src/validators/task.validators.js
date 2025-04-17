import { body, param } from "express-validator";
import { AvailableTaskStatuses } from "../utils/constants.js";

const createTaskValidator = () => {
    return [
        body("title")
            .trim()
            .notEmpty()
            .withMessage("Task title is required")
            .isLength({ min: 2 })
            .withMessage("Task title should be atleast 2 char"),
        body("description").optional(),
        body("project")
            .notEmpty()
            .withMessage("project id is required")
            .isMongoId()
            .withMessage("Invalid project id"),
        body("assignedTo")
            .notEmpty()
            .withMessage("user id is required")
            .isMongoId()
            .withMessage("Invalid user id"),
        body("assignedBy")
            .notEmpty()
            .withMessage("user id is required")
            .isMongoId()
            .withMessage("Invalid user id"),
        body("status")
            .optional()
            .isIn(AvailableTaskStatuses)
            .withMessage("Invalid task status"),
    ];
};

const getTaskByIdValidator = () => {
    return [
        param("taskId")
            .notEmpty()
            .withMessage("task id is required")
            .isMongoId()
            .withMessage("Invalid task id"),
    ];
};

const updateTaskValidator = () => {
    return [
        param("taskId")
            .notEmpty()
            .withMessage("task id is required")
            .isMongoId()
            .withMessage("Invalid task id"),
        body("title")
            .trim()
            .notEmpty()
            .withMessage("Task title is required")
            .isLength({ min: 2 })
            .withMessage("Task title should be atleast 2 char"),
        body("description").optional(),
        body("status")
            .optional()
            .isIn(AvailableTaskStatuses)
            .withMessage("Invalid task status"),
    ];
};

const deleteTaskValidator = () => {
    return [
        param("taskId")
            .notEmpty()
            .withMessage("task id is required")
            .isMongoId()
            .withMessage("Invalid task id"),
    ];
};

export {
    createTaskValidator,
    getTaskByIdValidator,
    updateTaskValidator,
    deleteTaskValidator,
};

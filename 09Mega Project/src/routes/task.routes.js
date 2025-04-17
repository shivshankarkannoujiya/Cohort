import { Router } from "express";
import {
    isLoggedIn,
    isMemberOfProject,
    isProjectAdminOrAdmin,
} from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

import {
    createTask,
    deleteTask,
    getTaskById,
    getTasks,
    updateTask,
} from "../controllers/task.controller.js";
import {
    createTaskValidator,
    deleteTaskValidator,
    getTaskByIdValidator,
    updateTaskValidator,
} from "../validators/task.validators.js";

const router = Router();

/**
    @description Task Routes
 */

router.route("/createtask").post(
    isLoggedIn,
    upload.fields([
        {
            name: "attachment",
            maxCount: 10,
        },
    ]),
    createTaskValidator(),
    validate,
    isProjectAdminOrAdmin,
    createTask,
);

router.route("/tasks").get(isLoggedIn, isMemberOfProject, getTasks);

router
    .route("/tasksbyId/:taskId")
    .get(
        isLoggedIn,
        getTaskByIdValidator(),
        validate,
        isMemberOfProject,
        getTaskById,
    );

router
    .route("/updatetask/:taskId")
    .put(
        isLoggedIn,
        updateTaskValidator(),
        validate,
        isProjectAdminOrAdmin,
        updateTask,
    );

router
    .route("/deletetask/:taskId")
    .delete(
        isLoggedIn,
        deleteTaskValidator(),
        validate,
        isProjectAdminOrAdmin,
        deleteTask,
    );

export default router;

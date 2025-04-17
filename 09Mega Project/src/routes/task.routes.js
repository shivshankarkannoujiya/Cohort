import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
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

router
    .route("/createtask")
    .post(isLoggedIn, createTaskValidator(), validate, createTask);

router.route("/tasks").get(isLoggedIn, getTasks);

router
    .route("/tasksbyId/:taskId")
    .get(isLoggedIn, getTaskByIdValidator(), validate, getTaskById);

router
    .route("/updatetask/:taskId")
    .put(isLoggedIn, updateTaskValidator(), validate, updateTask);

router
    .route("/deletetask/:taskId")
    .delete(isLoggedIn, deleteTaskValidator(), validate, deleteTask);

export default router;

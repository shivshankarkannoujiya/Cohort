import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";

import {
    createSubTask,
    deleteSubTask,
    updateSubTask,
} from "../controllers/subTask.controller.js";
import {
    createSubTaskValidator,
    deleteSubTaskValidator,
    updateSubTaskValidator,
} from "../validators/subtask.validators.js";

const router = Router();

/**
    @description Sub Task Routes
 */

router
    .route("/createsubtask")
    .post(isLoggedIn, createSubTaskValidator(), validate, createSubTask);

router
    .route("/updatesubtask/:subTaskId")
    .put(isLoggedIn, updateSubTaskValidator(), validate, updateSubTask);

router
    .route("/deletesubtask/:subTaskId")
    .delete(isLoggedIn, deleteSubTaskValidator(), validate, deleteSubTask);

export default router;

import express from "express";
import type { Router } from "express";
import HealthController from "./health.controller";

export function register(): Router {
  const router = express.Router();
  const controller = new HealthController();
  router.route("/").get(controller.handleHealthCheck.bind(controller));
  return router;
}

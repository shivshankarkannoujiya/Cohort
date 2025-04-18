import express from "express";
import type { Application } from "express";
import { register as registerHealthRoutes } from "./routes/health/health.routes";

export const createApp = (): Application => {
  const app: Application = express();
  app.use("/api/v1/health", registerHealthRoutes());
  return app;
};

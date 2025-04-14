import express from "express";

const app = express();

// router import
import healthCheckRouter from "./routes/healthcheck.routes.js";

// routes initialization
app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;

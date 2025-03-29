import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: [`GET`, `POST`, `DELETE`, `OPTIONS`],
        allowedHeaders: [`Content-Type`, `Authorization`],
    })
);

// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";

// initialize routes
app.use(`/api/v1/healthcheck`, healthcheckRouter);
app.use(`/api/v1/users`, userRouter);


export { app };

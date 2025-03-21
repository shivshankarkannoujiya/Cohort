import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.BASE_URL,
    methods: [`GET`, `POST`, `DELETE`, `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}))


// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"


// routes
app.use("/api/v1/healthcheck", healthcheckRouter)

export default app
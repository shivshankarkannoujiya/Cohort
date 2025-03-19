import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.BASE_URL,
    methods: [`GET`, `POST`, `DELETE`, `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}))


app.get("/", (_, res) => {
    res.status(200).json({
        success: true,
        message: "Test checked"
    })
})

export default app

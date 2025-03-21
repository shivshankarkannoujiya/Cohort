import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.BASE_URL,
    methods: [`GET`, `POST`, `DELETE`, `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}))




export default app
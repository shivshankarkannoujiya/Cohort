import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


// import routes 
import userRouter from "./routes/auth.routes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get("/", (_, res) => {
    res.status(200).json({
        success: true,
        message: "Test checked"
    })
}) 

// user routes
app.use("/api/v1/users", userRouter);


app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});

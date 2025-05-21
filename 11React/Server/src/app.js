import express from "express";

const app = express();


app.get("/api", (_, res) => {
    res.status(200).json({
        message: "Welcome to Chaicode"
    })
})


export default app;
import express from "express";
import { chaiTypes, specialChai } from "./data.js";


const app = express();
app.use(express.json())

app.get("/api", (_, res) => {
    res.status(200).json({
        message: "Welcome to Chaicode"
    })
})

app.get("/api/allchai", (_, res) => {
    try {
        res.status(200).json({
            success: true,
            data: chaiTypes
        })
    } catch (error) {
        console.error("Error while fetching chaiData: ", error)
        res.status(500).json({
            success: false,
            error: error?.message ?? "Something went wrong while fetching allChai"
        })
    }
})

app.get("/api/special-chai", (_, res) => {
    try {
        res.status(200).send(specialChai);
    } catch (error) {
        console.error("Error while fetching special chai: ", error);
        res.status(500).json({
            success: false,
            error: error?.message ?? "Something went wrong while fetching special chai"
        })
    }
})

export default app;
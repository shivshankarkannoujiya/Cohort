import express from "express"
import { registerUser } from "../controller/user.controller.js"


const router = express.Router()

router.route("/register").get( registerUser )

export default router
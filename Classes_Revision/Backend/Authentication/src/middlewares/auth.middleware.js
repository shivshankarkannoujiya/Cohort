import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
    try {
        const token =
            req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "");
        console.log(`Token from Middleware: `, token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
            });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded?.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid access token",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Auth middleware failure: ", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error",
        });
    }
};

export { isLoggedIn }
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const isLoggedIn = async (req, res, next) => {
    try {
        const token =
            req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: `Unauthorize request`,
            });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded?.id).select("-password -refreshToken");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: `Invalid access token`,
            });
        }

        // req.user = decoded
        req.user = user;
        next();
    } catch (error) {
        console.log(`Auth middleware failure: `, error);
        res.status(500).json({
            success: false,
            message: `Internal server error`,
            error: error,
        });
    }
};

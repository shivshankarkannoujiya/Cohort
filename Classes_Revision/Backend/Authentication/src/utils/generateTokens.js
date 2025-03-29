import { User } from "../models/User.model.js";

export const generateAccessAndRefreshToken = async function (userId) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            console.log(`Invalid userId`);
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return {
            accessToken,
            refreshToken,
        };
    } catch (error) {
        throw new Error("Error while generating access and refresh token: ", error);
    }
};

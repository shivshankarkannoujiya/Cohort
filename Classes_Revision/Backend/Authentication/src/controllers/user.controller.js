import { User } from "../models/User.model.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendMail.js";
import { generateAccessAndRefreshToken } from "../utils/generateTokens.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(401).json({
            success: false,
            message: "All fields are required",
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            message: "password must be atleat 6 character long",
        });
    }

    try {
        const existingUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered",
            });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        // genrate verificationToken
        const token = await crypto.randomBytes(32).toString("hex");
        const tokenExpiry = Date.now() + 10 * 60 * 60 * 1000;
        console.log(`verificationToken: `, token);

        user.verificationToken = token;
        user.verificationTokenExpires = tokenExpiry;
        await user.save();

        const createdUser = await User.findById(user._id).select("-password");
        if (!createdUser) {
            return res.status(404).json({
                success: false,
                message: "User not created",
            });
        }

        await sendEmail(
            createdUser.email,
            `verify your email`,
            `Please click on following link to verify your account: 
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `
        );

        res.status(201).json({
            success: true,
            user: createdUser._id,
            message: "User created successfully !!",
        });
    } catch (error) {
        console.log("Error while registering User: ", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error",
        });
    }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    console.log("TOKEN: ", token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }

    try {
        const user = await User.findOne({
            verificationToken: token,
            verificationTokenExpires: {
                $gt: Date.now(),
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid token",
            });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: "User verified successfully !!",
        });
    } catch (error) {
        console.log("Error while verifying User: ", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const missingUsernameAndEmail = !username && !email;
        if (missingUsernameAndEmail) {
            return res.status(401).json({
                success: false,
                message: "username or email required",
            });
        }

        const user = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid username or password",
            });
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid user credentials",
            });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "Please verify your account",
            });
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };

        res.status(200)
            .cookie("accessToken", accessToken, cookieOptions)
            .cookie("refreshToken", refreshToken, cookieOptions)
            .json({
                success: true,
                userId: loggedInUser._id,
                accessToken: accessToken,
                message: "User loggedIn successfully",
            });
    } catch (error) {
        console.log("Error while log In user: ", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error",
        });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).select("-password -refreshToken");
        console.log("USER: ", user);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user does not exist",
            });
        }

        res.status(200).json({
            success: true,
            user,
            message: "User profile fetched successfully",
        });
    } catch (error) {
        console.log("Error while fetching user profile: ", error);
        res.status(500).json({
            success: false,
            error: error?.message,
            message: "Internal server error",
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user?._id,
            {
                $set: {
                    refreshToken: undefined,
                },
            },
            { new: true }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };

        res.status(200)
            .clearCookie("accessToken", accessToken, cookieOptions)
            .clearCookie("refreshToken", refreshToken, cookieOptions)
            .json({
                success: true,
                message: "User logout successfully",
            });
    } catch (error) {
        console.log("ERROR occured during logout user: ", error);
        res.status(500).json({
            success: false,
            error: error?.message,
            message: "Internal server error",
        });
    }
};

const refreshAccessToken = async (req, res) => {
    try {
        const incommingRefreshToken =
            req.cookies?.refreshToken || req.header("Authorization").replace("Bearer ", "");
        console.log("REFRESH TOKEN: ", incommingRefreshToken);
        if (!incommingRefreshToken) {
            return res.status(404).json({
                success: false,
                message: "Unauthorized access",
            });
        }

        const decodedToken = jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findById(decodedToken?.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid refresh token",
            });
        }

        if (incommingRefreshToken !== user?.refreshToken) {
            return res.status(401).json({
                success: false,
                message: "refresh token is expired or used",
            });
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };

        res.status(200)
            .cookie("accessToken", accessToken, cookieOptions)
            .cookie("refreshToken", refreshToken, cookieOptions)
            .json({
                success: true,
                accessToken: accessToken,
                message: "access token refreshed successfully",
            });
    } catch (error) {
        console.log("Err while refreshing access token: ", error);
        res.status(500).json({
            success: false,
            error: error?.message,
            message: "Internal server error",
        });
    }
};

const changeCurrentPassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(401).json({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await User.findById(req.user?._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist",
            });
        }

        const isPasswordValid = await user.isPasswordCorrect(oldPassword);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "old password is incorrect",
            });
        }

        user.password = newPassword;
        await user.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            message: "password changed successfully",
        });
    } catch (error) {
        console.log("Error occured while changing password: ", error);
        res.status(500).json({
            success: false,
            error: error?.message,
            message: "Internal server error",
        });
    }
};

export {
    registerUser,
    verifyUser,
    loginUser,
    getProfile,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
};

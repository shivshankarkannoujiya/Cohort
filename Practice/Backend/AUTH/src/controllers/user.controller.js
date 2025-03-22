import { User } from "../models/User.model.js";
import { generateAccessAndRefreshToken } from "../utils/generateTokens.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    /*
        1. get user data from frontend
        2. validate data
        3. check if the user already register 
        4. if not: Create new user in db
        => Remove password and refreshToken field from response
        5. Create verification token
        6. Save token in db 
        7. Send token to User via Email
        8. Send success status to User

    */

    const { username, email, password } = req.body;
    if ([username, email, password].some((field) => field?.trim() === "")) {
        return res.status(401).json({
            success: false,
            message: `All fields are required`,
        });
    }

    try {
        const existingUser = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: `User already exist`,
            });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        const createdUser = await User.findById(user._id).select("-password -refreshToken");

        if (!createdUser) {
            res.status(404).json({
                success: false,
                message: `User not created`,
            });
        }

        const token = await crypto.randomBytes(32).toString("hex");
        console.log("TOKEN: ", token);

        user.verificationToken = token;
        await user.save();

        await sendEmail(
            user.email,
            `Verify your email`,
            `Please click on following link to verify your account:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `
        );

        res.status(201).json({
            success: true,
            userId: createdUser._id,
            message: `User created successfully !!`,
        });
    } catch (error) {
        console.log(`Error while registering User: `, error);
        res.status(500).json({
            success: false,
            message: `Internal server error`,
            error: error,
        });
    }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    console.log("TOKEN from Param: ", token);

    try {
        if (!token) {
            return res.status(404).json({
                success: false,
                message: `Invalid token`,
            });
        }

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `Invalid token`,
            });
        }

        user.isVarified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: `User verified successfully`,
        });
    } catch (error) {
        console.log(`Error while verifying User: `, error);
        res.status(500).json({
            success: false,
            error: error,
            message: `Internal server error`,
        });
    }
};

const loginUser = async (req, res) => {
    /*
        1. get user data from frontend
        2. validate user data
        3. check if user register/exist in db if,
        4. YES: compare password if, 
        5. Correct: User isVerified
        6. generate Access and refresh Token
        7. send cookie
        7. Return response
    */

    const { username, email, password } = req.body;
    if (!(username || email)) {
        return res.status(400).json({
            success: false,
            message: `username or email required`,
        });
    }

    try {
        const user = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User does not exist`,
            });
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: `Invalid user credential`,
            });
        }

        if (!user.isVarified) {
            return res.status(400).json({
                success: false,
                message: `User does not verified`,
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
                message: `User logged in successfully`,
            });
    } catch (error) {
        console.log(`Error while logIn user: `, error);
        res.status(500).json({
            success: false,
            error: error,
            message: `Internal server error`,
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    refreshToken: undefined,
                },
            },
            {
                new: true,
            }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };

        res.status(200)
            .clearCookie("accessToken", cookieOptions)
            .clearCookie("refreshToken", cookieOptions)
            .json({
                success: true,
                message: `User logged out successfully`,
            });
    } catch (error) {
        console.log(`Something went wrong while logout user: `, error);
        res.status(500).json({
            success: false,
            error: error,
            message: `Internal server error`,
        });
    }
};

const refreshAccessToken = async (req, res) => {
    try {
        const incommingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;
        if (!incommingRefreshToken) {
            return res.status(401).json({
                success: false,
                message: `unauthorized access`,
            });
        }

        const decodedToken = jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findById(decodedToken?.id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: `Invalid refresh token`,
            });
        }

        if (incommingRefreshToken !== user?.refreshToken) {
            return res.status(401).json({
                success: false,
                message: `refresh token is expired or used`,
            });
        }

        const { accessToken, newrefreshToken } = await generateAccessAndRefreshToken(user._id);

        const cookieOptions = {
            httpOnly: true,
            secure: true,
        };

        res.status(200)
            .cookie("accessToken", accessToken, cookieOptions)
            .cookie("refreshToken", newrefreshToken, cookieOptions)
            .json({
                success: true,
                accessToken: accessToken,
                message: `access token refreshed successfully`,
            });
    } catch (error) {
        console.log(`Error while refreshing access token: `, error);
        res.status(500).json({
            success: false,
            error: error,
            message: `Internal server error`,
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).select("-password -refreshToken");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `user does not exist`,
            });
        }

        res.status(200).json({
            success: true,
            user: user,
            message: `User details fetched successfully`,
        });
    } catch (error) {
        console.log(`Error while fetching user detatils: `, error);
        res.status(500).json({
            success: false,
            error: error,
            message: `internal server error`,
        });
    }
};

export {
    registerUser,
    verifyUser,
    loginUser,
    logoutUser,
    getMe,
    refreshAccessToken
};

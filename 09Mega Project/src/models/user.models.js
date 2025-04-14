import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
    {
        avatar: {
            type: {
                url: String,
                localPath: String,
            },
            default: {
                url: `https://placehold.co/500x400`,
                localPath: "",
            },
        },

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: AvailableUserRoles,
            default: UserRolesEnum.MEMBER,
            required: true,
        },

        password: {
            type: String,
            required: [true, "password is required"],
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        forgotPasswordToken: {
            type: String,
        },

        forgotPasswordExpiry: {
            type: Date,
        },

        refreshToken: {
            type: String,
        },

        emailVerificationToken: {
            type: String,
        },

        emailVerificationExpiry: {
            type: Date,
        },
    },
    { timestamps: true },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRY },
    );
};

userSchema.methods.generateTemporaryToken = async function () {
    const unHashedToken = await crypto.randomBytes(32).toString("hex");

    /*
        1. I want to put `hashedToken in DB`
        2. `unHashedToken`: User ko denge
        3. Jab Value ayega mere pass then compare kr lenge
    
    `
        - DB ke kya data kaise rakhte hai,  unke upar `Compliance ` aate hai
        - Sometimes `username | email | firstname | lastname | telephone | creditCard` encrypt rkhna pade
    `
    */

    const hashedToken = await crypto
        .createHash("sha256")
        .update(unHashedToken)
        .digest("hex");
    const tokenExpiry = Date.now() + 20 * 60 * 1000;

    return { unHashedToken, hashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);

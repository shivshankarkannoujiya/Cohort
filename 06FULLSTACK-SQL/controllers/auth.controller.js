import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
    if ((!name || !email || !password, !phone)) {
        console.log("Data is missing");
        res.status(401).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "User already exist",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const token = crypto.randomBytes(32).toString("hex");

        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                verificationToken: token,
            },
        });

        // TODO: Send mail

        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.log("Error while registering User: ", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error,
        });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            res.status(404).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_SECRET_EXPIRY,
            }
        );

        cookieOptions = {
            httpOnly: true,
            secure: true,
        };
        res.cookie("token", token, cookieOptions);
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            },
            message: "User loggedIin successfully",
        });
    } catch (error) {
        console.log("Error while loggedIn User: ", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

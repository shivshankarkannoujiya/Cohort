import { User } from "../models/User.model.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

const registerUser = async (req, res) => {
    /*
        1. get data
        2. validate data
        3. check if the user already register 
        4. if not: Create new user in db
        5. Create verification token
        6. Save token in db 
        7. Send token to User via Email
        8. Send success status to User

    */

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
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
            return res.status(400).json({
                success: false,
                message: `User already exist`,
            });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        if (!user) {
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

export { registerUser };

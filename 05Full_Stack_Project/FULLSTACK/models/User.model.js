import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    verificationToken: {
        type: String
    },

    resetPasswordToken: {
        type: String
    },

    resetPasswordTokenExpires: {
        type: Date
    },

}, { timestamps: true })


const User = mongoose.model("User", userSchema)

export default User
import User from "../models/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"

const registerUser = async (req, res) => {

    /*
    console.log("Req: ", req)
    console.log("Res: ",res);
        1. get data
        2. validate data
        3. check if User already Exist
        5. if not Exist: Create User in db
        6. Create a verification Token 
        7. Save token in DB
        8. Send Token as email to User
        9. Send success status to User
    
    */

    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
        return res
            .status(400)
            .json({
                message: "All fields are required"
            })
    }

    try {

        const existingUser = await User.findOne({ email })
        if (existingUser) {

            return res
                .status(400)
                .json({
                    message: "User already exists"
                })
        }

        const user = await User.create({
            name,
            email,
            password
        })

        console.log(user);
        

        if (!user) {
            return res.status(404).json({
                message: "User not registered"
            })
        }

        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);

        user.verificationToken = token
        await user.save()
        
        // send email
        const transporter = nodemailer.createTransport({

            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `
        }

        await transporter.sendMail(mailOptions)

        res.status(201).json({
            message: "User registered successfully",
            success: true
        })

    } catch (error) { 
        console.log(`ERR: `, error)
        res.status(500).json({
            message: "Error during User registration",
            success: false,
            error: error
        })
    }
}

const verifyUser = async (req, res) => {

    /*
        1. get token from URL/body
        2. Validate <Token aya ki nhi>
        3. find user based on token 
        4. if User fouund: 
        5. SET isVerified: true
        6. Remove verification token
        7. Save
        8. Return response
    */
    
    const { token } = req.params
    console.log(token)
    if (!token) {
        return res.status(400).json({
            message: "Invalid token"
        })
    }
    
    try {

        const user = await User.findOne({ verificationToken: token })
        if (!user) {
            return res.status(400).json({
                message: "Invalid token"
            })
        }
    
        user.isVerified = true
        user.verificationToken = undefined // Change to: null, "" and watch in DB
        await user.save()

        res.status(200).json({
            message: "User verified successfully",
            success: true
        })

        
    } catch (error) {
        console.log(`ERRR: `, error)
        res.status(500).json({
            message: "Something went wrong while verifying user",
            success: true,
            error: error
        })
    }

}

export { registerUser, verifyUser}
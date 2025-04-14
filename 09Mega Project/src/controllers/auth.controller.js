import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { UserRolesEnum } from "../utils/constants.js";
import { emailVerificationMailGenContent, sendMail } from "../utils/mail.js";

const registerUser = asyncHandler(async (req, res) => {
    const { username, fullname, email, password, role } = req.body;

    if (
        [username, fullname, email, password].some(
            (field) => field?.trim() === "",
        )
    ) {
        throw new ApiError(401, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { username }],
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist");
    }

    const user = await User.create({
        username,
        fullname,
        email,
        password,
        role: role || UserRolesEnum.MEMBER,
    });

    const { unHashedToken, hashedToken, tokenExpiry } =
        user.generateTemporaryToken();

    /*
        - assign hashedToken and tokenExpiry in DB till user clicks on email  verification link
        -The email verification is handled by {@link verifyEmail}
   */

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiry = tokenExpiry;
    await user.save({ validateBeforeSave: false });

    await sendMail({
        email: user?.email,
        subject: "Please verify your email",
        mailGenContent: emailVerificationMailGenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`,
        ),
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                { user: createdUser },
                "Users registered successfully and verification email has been sent on your email.",
            ),
        );
});

const loginUser = asyncHandler(async (req, res) => {});
const logOutUser = asyncHandler(async (req, res) => {});
const verifyEmail = asyncHandler(async (req, res) => {});
const resendVerificationEmail = asyncHandler(async (req, res) => {});
const refreshAccessToken = asyncHandler(async (req, res) => {});
const forgotPasswordRequest = asyncHandler(async (req, res) => {});
const changeCurrentPassword = asyncHandler(async (req, res) => {});
const getCurrentUser = asyncHandler(async (req, res) => {});

export {
    registerUser,
    loginUser,
    logOutUser,
    verifyEmail,
    resendVerificationEmail,
    refreshAccessToken,
    forgotPasswordRequest,
    changeCurrentPassword,
    getCurrentUser,
};

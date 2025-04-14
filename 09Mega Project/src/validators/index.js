import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is Invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("username is required")
            .isLength({ min: 3 })
            .withMessage("username should be atleast 3 char")
            .isLength({ max: 13 })
            .withMessage("username cannot exceed 13 char"),
        body("password")
            .trim()
            .notEmpty("Password is required")
            .isLength({ min: 6 })
            .withMessage("Password should be atleast 6 char"),
    ];
};

const userLoginValidator = () => {
    return [
        body("email").isEmail().withMessage("Email is not valid"),
        body("password").withMessage("Password can not be empty"),
    ];
};

export { userRegistrationValidator, userLoginValidator };

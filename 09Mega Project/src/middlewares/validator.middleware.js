import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, _, next) => {
    const errors = validationResult(req);

    console.log("ERRORS from Validators: ", errors);
    console.log("Type of Errors from Validators: ", typeof errors);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];

    // TODO: Understand
    errors.array().map((err) =>
        extractedErrors.push({
            [err.path]: err.msg,
        }),
    );
    console.log("ExtractedErrors: ", extractedErrors);

    throw new ApiError(422, "Received data is not valid", extractedErrors);
};

import { ApiResponse } from "../utils/api-response.js";

const healthCheck = async (_, res) => {
    res.status(200).json(
        new ApiResponse(200, { message: "Server is running" }),
    );
};

export { healthCheck };

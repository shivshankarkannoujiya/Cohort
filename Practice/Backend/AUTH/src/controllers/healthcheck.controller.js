export const healthCheck = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "OK, Health Check Passed !!",
        });
    } catch (error) {
        console.log("Error in healthCheck: ", error);
        res.status(500).json({
            success: false,
            error: error,
            message: "Internal Server Error",
        });
    }
};

export const healthCheck = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: `OK, health check passed !`
        })
    } catch (error) {
        console.log(`Error in healthCheck: `, error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: `Internal server error`
        })
    }
}

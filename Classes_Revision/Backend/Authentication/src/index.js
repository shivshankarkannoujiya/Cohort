import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config({
    path: `./.env`,
});

const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`MongoDB connection Error:`, error);
            process.exit(1);
        });

        app.listen(port, () => {
            console.log(`Server is listening at: ${port}`);
        });
    })
    .catch((error) => {
        console.log(`ERROR: `, error);
    });

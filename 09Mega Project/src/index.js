import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 4000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection Error: ", err);
        process.exit(1);
    });

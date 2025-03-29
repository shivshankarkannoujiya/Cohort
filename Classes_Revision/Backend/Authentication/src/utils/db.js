import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv";

dotenv.config({
    path: `./.env`,
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(
            `\n Hurrey! MongoDB connection successfully ! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log(`Error while connection MongoDB: `, error);
        process.exit(1);
    }
};

export { connectDB };

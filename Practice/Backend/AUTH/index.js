import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config({
    path: `./.env`,
});

const port = process.env.PORT || 4000;


connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Serving at: http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(`Error during mongoDB coonnection: `, error);
    });

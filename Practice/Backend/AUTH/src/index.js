import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";


dotenv.config({
    path: `./.env`
})

const port = process.env.PORT || 8000

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("ERRR: ", error);
            process.exit(1)
        })

        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed: ", err);
    })
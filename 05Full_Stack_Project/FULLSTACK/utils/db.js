import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

// exports a function that connects to db

const db =  () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`Connected to MongoDB`)
        })
        .catch((err) => {
            console.log(`Error connecting mongoDB: `, err)
        })
    
}

export default db
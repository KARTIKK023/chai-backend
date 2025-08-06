//require("dotenv").config({path: './env'}); // Load environment variables from .env file//

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({ path: './.env' }); // Load environment variables from .env file

connectDB()// Connect to MongoDB
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("Connected to MongoDB successfully");
    app.on("error", (error) => {
        console.error("Error in MongoDB connection:", error);
        throw error; // Throw error to be caught by the catch block
    });
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with failure
});






















/* this is approach 1 which is good but pollutes the index file
import express from "express";
const app = express();

( async () => {
    try {
       await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
         console.log("Connected to MongoDB successfully");
         app.on("error", (error) => {
            console.error("Error in MongoDB connection:", error);
            throw error;
         });
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; 
    }
})()
*/
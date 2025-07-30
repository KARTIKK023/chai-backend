//require("dotenv").config({path: './env'}); // Load environment variables from .env file//

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ path: './.env' }); // Load environment variables from .env file

connectDB(); // Connect to MongoDB






















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
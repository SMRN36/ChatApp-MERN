const express = require("express");
const dotenv = require("dotenv");
const {default: mongoose} = require("mongoose");

const app = express();
dotenv.config();

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to DB");
    } catch(err){
        console.log("Server is not connected to DB", err.message);
    }
};
connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running..."));
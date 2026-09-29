const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

const port = 5000;

app.use(cors());
app.use(userRoutes);
app.use(express.json());

// MongoDB connection
const mongodburl = "mongodb://localhost:27017/mydb";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(mongodburl);
        console.log("Connected to MongoDB Server Success");
    } catch (error) {
        console.log("MongoDB Connection Failed:");
        console.log(error.message);
    }
};

// Test API
app.get("/", function (req, res) {
        res.send("SmartHire Backend is Running");
    });

// Connect MongoDB and start server
connectToMongoDb().then(() => {
    app.listen(port, () => {
        console.log(
            `SmartHire server running on http://localhost:${port}`
        );
    });
});
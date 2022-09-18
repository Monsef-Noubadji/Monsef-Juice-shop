const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    const URI = process.env.MONGO_URI;
    // database connection
    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(
            URI,
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then((res) => {
                console.log("Database Connected 🟢 ")
            })
    }
    catch (e) {
        console.log("Connection Failed 🔴");
    }
}
module.exports = connectDB;
const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${process.env.DBURI}`, {
        });

        console.log("Database is connected!");

        mongoose.connection.on("disconnected", () => {
            console.log("Database connection lost. Attempting to reconnect...");
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
};

module.exports = connectToDatabase;

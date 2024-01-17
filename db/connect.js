const mongoose = require("mongoose");

const connectdb = async () => {
    const uri = process.env.MONGO_URL;
    console.log("Connecting to MongoDB with URI:", uri);

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectdb;

// Call the connectdb function to establish the connection
connectdb();

// app.js

const express = require("express");
const app = express();
require("dotenv").config();
const connectdb = require("./db/connect");
const productRoutes = require("./routes/productrouter"); // Corrected file name

app.get("/", (req, res) => {
    res.send("hi");
});

app.use("/api/products", productRoutes); // Corrected variable name

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectdb(process.env.MONGO_URL); // Make sure this line is correct
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

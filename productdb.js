// productdb.js
require("dotenv").config();
const connectdb = require("./db/connect");
const Product = require("./models/Productmodel");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        const connection = await connectdb(process.env.MONGO_URL);
        await Product.create(ProductJson);
        console.log("Data inserted successfully");
        await connection.close(); // Close the connection after data insertion
    } catch (error) {
        console.error("Error inserting data into MongoDB:", error);
        process.exit(1);
    }
};

start();

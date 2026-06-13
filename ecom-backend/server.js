const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoute");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
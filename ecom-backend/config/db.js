const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.MONGO_URI);
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = connectDB;
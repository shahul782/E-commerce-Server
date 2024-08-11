
const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/mini-Ecommerce";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log('MongoDB is connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;

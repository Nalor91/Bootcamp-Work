
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        return conn;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
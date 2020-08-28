require('dotenv').config();
const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.userPassword}@cluster0.ms7rq.mongodb.net/vsacDb?retryWrites=true&w=majority`; // Using environment variables in place of the username and password in the connection string

const connectDb = async ()=> {
   await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
   console.log('db connected...');
}

module.exports = connectDb;
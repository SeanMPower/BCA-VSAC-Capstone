require('dotenv').config();
const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.userPassword}@cluster0.ms7rq.mongodb.net/vsacDb?retryWrites=true&w=majority`;

const connectDb = async ()=> {
   await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
   console.log('db connected...');
}

module.exports = connectDb;
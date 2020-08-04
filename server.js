const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./DB/Connection.js');
const app = express();
const firebase = require('firebase-app');

connectDb();

app.use(express.json({extended: false}));
app.use('/submit', require('./API/User'))
const Port = process.env.Port || 5000;

app.listen(Port, ()=> console.log(`Server started on port ${Port}`))

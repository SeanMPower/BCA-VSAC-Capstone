const express = require('express');
const connectDb = require('./DB/Connection.js');
const app = express();

connectDb();
app.use(express.json({extended: false}));
app.use('/api/providerModel', require('./API/User'))
const Port = process.env.Port || 5000;

app.listen(Port, ()=> console.log(`Server started on port ${Port}`))

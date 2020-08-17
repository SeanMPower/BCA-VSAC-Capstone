const express = require('express');
const connectDb = require('./DB/Connection.js');
const app = express();
const user = require('./API/User.js')

connectDb();



app.use('/user', user)

app.get('/', (req, res) => {})


app.use(express.json({extended: false}));
app.use('/submit', require('./API/User'))
const Port = process.env.Port || 5000;

app.listen(Port, ()=> console.log(`Server started on port ${Port}`))

const express = require("express");
const mongoose = require("mongoose");
const Provider = require("../DB/User");
const { json } = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
let db = mongoose.connection;
let collection = db.collection('providers');

route.use(bodyParser.json());

//Routes
route.get("/", (req, res) => {
  Provider.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});

route.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  res.json({
    msg: "We received your data!",
  });
});

//This instead of above
// route.post('/save', (req, res) => {
//     const data = req.body;

//     const newUser = new User(data);

//     newUser.save((error) => {
//         if (error) {
//             res.status(500).json({ msg: 'Sorry, internal server errors'})
//             return
//         }
//           return res.json({
//                 msg: 'Your data has been saved!'
//             })
//     })
// })

route.post("/", async (req, res) => {

  let programs = req.body.data;
  let programsArr = [];

  for (program of programs) {
    programsArr.push({
      uid: req.body.uid,
      viewable: false,
      ...program,
    });
  }

 Provider.insertMany(programsArr, function (err, docs) {
     if (err) {
         res.send(`Failed to upload, error: ${err.message}`)
    }  else {
        console.log("Multiple documents inserted to Collection!")
    }
 })

});

module.exports = route;

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

route.get('/provider/:uid', async (req, res) => {
  console.log(req.params)
  Provider.find({uid: req.params.uid}).then((data) => {return res.json(data)})
})

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

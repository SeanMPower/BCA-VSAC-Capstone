const express = require("express");
const mongoose = require("mongoose");
const Provider = require("../DB/User");
const { json } = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
let db = mongoose.connection;
let collection = db.collection('providers');
const ObjectId = require("mongodb").ObjectId

route.use(bodyParser.json());

//Routes
route.get("/", (req, res) => {
  Provider.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});


route.get("/home", async (req, res) => {
  Provider.find({})
})

route.get('/provider/:uid', async (req, res) => {
  console.log(req.params)
  Provider.find({ uid: req.params.uid }).then((data) => { return res.json(data) })
})

route.get('/delete/:_id', async (req, res) => {
  let objId = new ObjectId(req.params._id)

  Provider.deleteOne({ _id: objId }, (error) => {
    console.log(error)
  })
  console.log(JSON.stringify(req.params._id))
  console.log("This record has been deleted from the Database")
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
    } else {
      console.log("Multiple documents inserted to Collection!")
    }
  })

});

module.exports = route;

const express = require("express");
const mongoose = require("mongoose");
const Provider = require("../DB/User");
const route = express.Router();
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId

route.use(bodyParser.json());

//Routes

route.get('/provider/:uid', async (req, res) => {
  Provider.find({ uid: req.params.uid }).then((data) => { return res.json(data) })
})

route.get('/delete/:_id', async (req, res) => {
  let objId = new ObjectId(req.params._id)

  Provider.deleteOne({ _id: objId }).catch((error) => {
    console.log(error)
  })
  console.log("This record has been deleted from the Database")
})

route.post('/update/:_id', async (req, res) => {
console.log(req.body)
  
  let objId = new ObjectId(req.body._id)

  Provider.findByIdAndUpdate({ _id: objId }, req.body).catch((error) => {
    console.log(error)
  })
  console.log("This record has been updated")
})

route.get('/program/:_id', async (req, res) => {
  Provider.find({ _id: req.params._id }).then((data) => { return res.json(data) })
})

route.get("/vsac", (req, res) => {
  Provider.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});

route.get("/", (req, res) => {
Provider.find({ viewable: 'true' })
  .then((data) => {
       res.json(data);
       console.log(data)
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});

route.post("/", async (req, res) => {

  let programs = req.body.data;
  let programsArr = [];

  for (program of programs) {
    programsArr.push({
      uid: req.body.uid,
      viewable: 'true',
      ...program,
    });
  }

  Provider.insertMany(programsArr, function (err, docs) {
    if (err) {
      res.send(`Failed to upload, error: ${err.message}`)
    } else {
      console.log("Document(s) inserted in Database!")
    }
  })

});

module.exports = route;

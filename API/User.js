const express = require("express");
const mongoose = require("mongoose");
const Provider = require("../DB/User");
const route = express.Router();
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId

route.use(bodyParser.json()); // Allows the body of post requests to be converted to JSON

//Routes

route.get('/provider/:uid', async (req, res) => {  // This will return all program data uploaded by a particular authenticated user
  Provider.find({ uid: req.params.uid }).then((data) => { return res.json(data) })
})

route.get('/delete/:_id', async (req, res) => {  // This will delete a particular program from the database based on its document ID in the database
  let objId = new ObjectId(req.params._id)

  Provider.deleteOne({ _id: objId }).catch((error) => {
    console.log(error)
  })
  console.log("This record has been deleted from the Database")
})

route.post('/update/:_id', async (req, res) => {  // This will update a particular program in the database based on its document ID
console.log(req.body)
  
  let objId = new ObjectId(req.body._id)

  Provider.findByIdAndUpdate({ _id: objId }, req.body).catch((error) => {
    console.log(error)
  })
  console.log("This record has been updated")
})

route.get('/program/:_id', async (req, res) => {  // This will return program data from a single program by its document ID
  Provider.find({ _id: req.params._id }).then((data) => { return res.json(data) })
})

route.get("/vsac", (req, res) => {  // This will return all programs in the database
  Provider.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});

route.get("/", (req, res) => { // This will return all programs in the database with the property of viewable set to "true"
Provider.find({ viewable: 'true' })
  .then((data) => {
       res.json(data);
       console.log(data)
    })
    .catch((error) => {
      console.log("error: we could not process this request");
    });
});

route.post("/", async (req, res) => {  // This route handles the insertion of programs into the database, bundling with it the UID of the user uploading as well as setting the initial property of 'viewable' to 'false' until it is approved and updated to 'true' by a VSAC user.

  let programs = req.body.data;
  let programsArr = [];

  for (program of programs) {
    programsArr.push({
      uid: req.body.uid,
      viewable: 'false',
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

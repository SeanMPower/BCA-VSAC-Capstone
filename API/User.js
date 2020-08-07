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
  // let {providerName, program, certification, state, region, modality, price, pell, VTGrant, startDate, endDate, providerLink, contactEmail, recordCreatedBy, lastUpdate} = req.body;

  // let provider = {};

  // provider.uid = req.body.uid
  // provider.providerName = req.body.data[0].provider;
  // provider.program = program;
  // provider.certification = certification;
  // provider.state = state;
  // provider.region = region;
  // provider.modality = modality;
  // provider.price = price;
  // provider.pell = pell;
  // provider.VTGrant = VTGrant;
  // provider.startDate = startDate;
  // provider.endDate = endDate;
  // provider.providerLink = providerLink;
  // provider.contactEmail = contactEmail;
  // provider.recordCreatedBy = recordCreatedBy;
  // provider.lastUpdate = lastUpdate;

  // let providerModel = new User(provider);
  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", function () {
    console.log("Connection Successful!");
  });

  let programs = req.body.data;
  let programsArr = [];

  for (program of programs) {
    programsArr.push({
      uid: req.body.uid,
      viewable: false,
      ...program,
    });
  }

 Provider.collection.insertMany(programsArr, function (err, docs) {
     if (err) {
         return console.error(err);
    }  else {
        console.log("Multiple documents inserted to Collection!")
    }
 })

});

module.exports = route;

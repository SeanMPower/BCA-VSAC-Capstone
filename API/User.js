const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const { json } = require('express');
const route = express.Router();
const bodyParser = require('body-parser')


route.use(bodyParser.json())

//Routes
route.get('/', (req, res) => {
    User.find({})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: we could not process this request')
        })
})

route.post('/save', (req, res) => {
    console.log('Body: ', (req.body));
    res.json({
        msg: 'We received your data!'
    })
})

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

route.post('/', async (req,res) => {
    // const{providerName, program, certification, region, modality, price, pell, VTGrant, startDate, endDate providerLink, contactEmail, recordCreatedBy, lastUpdate} = req.body;
    
    let provider = {};

    provider.uid = req.body.uid
    provider.providerName = providerName;
    provider.program = program;
    provider.certification = certification;
    provider.region = region;
    provider.modality = modality;
    provider.price = price;
    provider.pell = pell;
    provider.VTAdvancementGrant = VTAdvancementGrant;
    provider.startDate = startDate;
    provider.endDate = endDate;
    provider.providerLink = providerLink;
    provider.contactEmail = contactEmail;
    provider.recordCreatedBy = recordCreatedBy;
    provider.lastUpdate = lastUpdate;

    let providerModel = new User(provider);

    await providerModel.save();
    // res.json(providerModel);
    
    console.log(req.body.uid)
    console.log(req.body.data)

    

})

module.exports = route;
const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User')
const route = express.Router();

route.post('/', async (req,res) => {
    const{providerName, program, certification, region, modality, price, pell, VTAdvancementGrant, startEndDates, providerLink, contactEmail, recordCreatedBy, lastUpdate} = req.body;
    
    let provider = {};
    
    provider.providerName = providerName;
    provider.program = program;
    provider.certification = certification;
    provider.region = region;
    provider.modality = modality;
    provider.price = price;
    provider.pell = pell;
    provider.VTAdvancementGrant = VTAdvancementGrant;
    provider.startEndDates = startEndDates;
    provider.providerLink = providerLink;
    provider.contactEmail = contactEmail;
    provider.recordCreatedBy = recordCreatedBy;
    provider.lastUpdate = lastUpdate;
    
    let providerModel = new User(provider);
    
    await providerModel.save();
    res.json(providerModel);
})

module.exports = route;
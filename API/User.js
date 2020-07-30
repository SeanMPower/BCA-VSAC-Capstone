const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User')
const route = express.Router();

route.post('/', async (req,res) => {
    const{providerName, program, region, modality, price, pell, advancementGrant, wioa, startEndDates, providerLink, expirationDate, contactEmail, lastUpdate} = req.body;
    
    let provider = {};
    
    provider.providerName = providerName;
    provider.program = program;
    provider.region = region;
    provider.modality = modality;
    provider.price = price;
    provider.pell = pell;
    provider.advancementGrant = advancementGrant;
    provider.wioa = wioa;
    provider.startEndDates = startEndDates;
    provider.providerLink = providerLink;
    provider.expirationDate = expirationDate;
    provider.contactEmail = contactEmail;
    provider.lastUpdate = lastUpdate;
    
    let providerModel = new User(provider);
    
    await providerModel.save();
    res.json(providerModel);
})

module.exports = route;
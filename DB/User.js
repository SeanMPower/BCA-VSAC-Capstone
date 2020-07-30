const mongoose = require('mongoose');

const user = new mongoose.Schema({
    providerName: {
        type: String
    },
    program: {
        type: String
    },
    region: {
        type: String
    },
    modality: {
        type: String
    },
    price: {
        type: Number
    },
    pell: {
        type: Boolean
    },
    advancementGrant: {
        type: Boolean
    },
    wioa: {
        type: Boolean
    },
    startEndDates: {
        type: String
    },
    providerLink: {
        type: String
    },
    expirationDate: {
        type: String
    },
    contactEmail: {
        type: String
    },
    lastUpdate: {
        type: String
    }
})

module.exports = User = mongoose.model('user', user);
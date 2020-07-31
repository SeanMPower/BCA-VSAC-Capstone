const mongoose = require('mongoose');

const user = new mongoose.Schema({
    providerName: {
        type: String, required: true
    },
    program: {
        type: String, required: true
    },
    region: {
        type: String, required: true
    },
    modality: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    pell: {
        type: Boolean, required: true
    },
    advancementGrant: {
        type: Boolean, required: true
    },
    wioa: {
        type: Boolean, required: true
    },
    startEndDates: {
        type: String, required: true
    },
    providerLink: {
        type: String, required: true
    },
    expirationDate: {
        type: String, required: true
    },
    contactEmail: {
        type: String, required: true
    },
    lastUpdate: {
        type: Date, default: Date.now
    }
})

module.exports = User = mongoose.model('user', user);
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    uid: {
        type: String, required: true
    },
    viewable: {
        type: Boolean, required: true
    },
    providerName: {
        type: String, required: true
    },
    program: {
        type: String, required: true
    },
    certification: {
        type: String
    },
    state: {
        type: String, require: true
    },
    region: {
        type: String, required: true
    },
    modality: {
        type: String
    },
    price: {
        type: String, required: true
    },
    pell: {
        type: Boolean, required: true
    },
    VTGrant: {
        type: Boolean, required: true
    },
    startDate: {
        type: Date, required: true
    },
    endDate: {
        type: Date, require: true
    },
    providerLink: {
        type: String, required: true
    },
    contactEmail: {
        type: String, required: true
    },
    recordCreatedBy: {
        type: String, required: true
    },
    lastUpdate: {
        type: Date, default: Date.now
    }
})

module.exports = User = mongoose.model('user', user);
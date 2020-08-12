const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        type: String, required: true
    },
    VTGrant:{
        type: String, required: true
    },
    startDate: {
        type: String, required: true
    },
    endDate: {
        type: String, require: true
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

module.exports = Provider = mongoose.model('Provider', userSchema, 'providers');
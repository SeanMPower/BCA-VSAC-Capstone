const mongoose = require('mongoose');


// This sets up the Mongoose schema for MongoDB
const userSchema = new mongoose.Schema({
    uid: {
        type: String, required: true
    },
    viewable: {
        type: String, required: true
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
       type: Date, default: Date.now, expires: 365*24*60*60 // "expires sets a Time-To-Live index on a date field in seconds, currently data is set to expire after one year."
    }
})

module.exports = Provider = mongoose.model('Provider', userSchema, 'providers');
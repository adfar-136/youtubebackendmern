const mongoose = require('mongoose');

const AppliedSchema = new mongoose.Schema({ 
    userId : {
        type: String,
        required: true
    },
    id : {
        type: Number,
        required: true
    },
    profile_name:{
        type: String,
        required: true
    },
    company_name:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    }
})

const appliedOppurtunity = mongoose.model('appliedOppurtunity', AppliedSchema);

module.exports = appliedOppurtunity;
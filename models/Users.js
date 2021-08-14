const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    createAt: {
        type: Date,
        default: Date.now
    },
    seatNo: {
        type: String,
        // required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        //required: true
    },
    phoneNo: {
        type: String,
       // required: true
    }
      
})

module.exports = mongoose.model('User', usersSchema)
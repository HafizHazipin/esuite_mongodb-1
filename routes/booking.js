const express = require('express')
const router = express.Router()

const User = require('../models/Users')

router.post("/booknow", function(req, res){
    let newUser = new User({
        createAt:req.body.createAt,
        seatNo:req.body.seatNo,
        fullName:req.body.fullName,
        email:req.body.email,
        phoneNo:req.body.phoneNo
        
    });
    newUser.save();
})

module.exports = router;
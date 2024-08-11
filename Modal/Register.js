const mongoose = require('mongoose');


const userSheema = new mongoose.Schema({
    email:{
        unique: true ,
        type:String
    },
    password:String
})
const Registerdetails = mongoose.model('Registerdetails',userSheema)

module.exports = Registerdetails
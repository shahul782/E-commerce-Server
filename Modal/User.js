// import mongoose from "mongoose";
// const schema = mongoose.schema;

// const userSheema = new mongoose.Schema({
//     email:String,
//     password:String
// })

// const userdatadetails =  mongoose.model('userdatadetails',userSheema);
// module.exports = userdatadetails;




const mongoose = require('mongoose')


const userSheema = new mongoose.Schema({
    password:String,
    email:{
        unique: true ,
        type:String
    }

})

 const userdatadetails = mongoose.model('userdatadetails',userSheema)
 module.exports = userdatadetails;
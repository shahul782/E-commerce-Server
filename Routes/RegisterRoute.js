// const express = require('express');
// const Registerdetails = require('../Modal/Register');
// const bcrypt = require('bcrypt');

// const router = express.Router();

// router.post("/register", async function (req, res) {
//     async function genhashpassword(password) {
//         const salt = await bcrypt.genSalt(10);
//         const hashedpassword = await bcrypt.hash(password, salt);
//         console.log("line14", hashedpassword);
//         return hashedpassword;
//     }

//     const { email, password } = req.body;
//     console.log(req.body);

//     try {
//         // Call genhashpassword with the password from the request body
//         const hashedpassword = await genhashpassword(password);
//         console.log("line20", hashedpassword);

//         // Check if the user already exists
//         const existUser = await Registerdetails.findOne({ email });

//         if (existUser) {
//             return res.status(422).send({ error: "Email already exists" });
//         }

//         // Create a new user
//         const newUser = new Registerdetails({ email, password: hashedpassword });
//         await newUser.save();

//         res.status(200).send({ msg: "Successfully registered" });
//     } catch (error) {
//         console.error(error);
//         if (error.name === 'ValidationError') {
//             return res.status(400).send({ error: "Validation error", details: error.message });
//         } else {
//             return res.status(500).send({ error: "Internal server error" });
//         }
//     }
// });


// module.exports = router;








const express = require ('express');
const bcrpt = require('bcrypt');
const Registerdetails = require('../Modal/Register');

const  router = express.Router();

router.post('/register', async function(req,res){

    async function genpassword(password){
        const salt = await bcrpt.genSalt(10);
        const hashedpassword = await bcrpt.hash(password,salt);

        console.log("line 67 is print"+hashedpassword)
        return hashedpassword;

    }
    const {email,password}= req.body;
    console.log(req.body);

    try {
        const hashedpassword = await genpassword(password)
        console.log("this is hash",hashedpassword)

       const  emailfind = await Registerdetails.findOne({email})

       if(emailfind){
        return res.status(422).send({error:"Email already exists"})
    
       }else{

        const newuser = new Registerdetails({email,password:hashedpassword})

        await newuser.save();
        return res.status(200).send({msg:"Successfully registered"})

        
       }
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: "Internal server error" });

        
    }

})

module.exports = router

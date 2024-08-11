const express = require ('express');
const userdatadetails = require('../Modal/User');
const router = express.Router();


router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;
    const existUser = await userdatadetails.findOne({ email });

    if (existUser) {
      return res.status(401).send({ error: "user already exist" });
    }
     else {
      res.send({ msg: "Successful login"});

    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
const express = require('express');
const {E} = require('sequelize');
const router = express.Router();

const { signup } = require('./user.controll'); 


router.get("/",async (req,res)=>{
    const userData = await signup();
res.status(200).json({
    userdata: userData,

   });
});

module.exports= router;


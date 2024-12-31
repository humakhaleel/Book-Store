const express = require("express");
const { getBook } = require("./Book.controll");


const router = express.Router();

router.get("/",async (req,res)=>{
    const userData = await getBook();
res.status(200).json({
    userdata: userData,

   });
});

module.exports = router;
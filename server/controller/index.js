const express = require("express");
const user = require("./user");
const dbBuild = require('../database/config/build');

const router = express.Router();

router.get("/build",(req,res)=> {
    dbBuild();
})

module.exports = router;
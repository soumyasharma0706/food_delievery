const {handleGenerateNewOrder} = require("../controllers/fooditem");
const express = require('express');
const router = express.Router();
const URL = require('../models/fooditem');


router.post('/',handleGenerateNewOrder);
console.log("here i have reached")
module.exports = router;


 
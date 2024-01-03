const express = require("express");
const  router = express.Router();
const foodItem = require("../models/fooditem")

router.get('/',async(req,res) => {
    if(!req.user) return res.redirect('/login')
    const allfoodItem = await foodItem.find({createdBy: req.user._id})
    console.log(req.user)
    return res.render('home',{
        foodItem:allfoodItem,
    })
})

router.get('/signup',(req,res) => {
    return res.render("signup")
})

router.get('/login',(req,res) => {
    console.log("helloooooo")
    return res.render("login")
})


module.exports = router;

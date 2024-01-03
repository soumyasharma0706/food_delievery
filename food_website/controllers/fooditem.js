const foodItem = require('../models/fooditem');
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"  + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();

const { response } = require("express");

async function handleGenerateNewOrder(req,res){
    console.log("here i have reached2")
    const body = req.body;
    console.log(body)
    console.log(datetime)
    // if(!body.url) return res.status(400).json({error:'url is required'})
    await foodItem.create({
        foodItem:body.fooditems,
        quantity:body.quantity,
        visitHistory:datetime,
        createdBy: req.user._id,
    });
    return res.render('home',{
        fooditem:body.fooditems,
        quantity:body.quantity
    })
}


module.exports = {
    handleGenerateNewOrder,
}

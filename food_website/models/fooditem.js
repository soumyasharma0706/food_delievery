const mongoose = require("mongoose")
const foodItemSchema  = new mongoose.Schema({
    foodItem:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    visitHistory:{
        type:String
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{ timestamps:true});

const foodItem = mongoose.model("foodItem2",foodItemSchema)

module.exports = foodItem;
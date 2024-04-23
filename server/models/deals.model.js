const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    usedTime:{
        type:Number,
        required:false
    },
    productImage:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    closingTime:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('deals',dealSchema)
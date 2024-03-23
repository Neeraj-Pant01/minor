const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
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
    Hours:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('deals',dealSchema)
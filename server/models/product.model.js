const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId:{
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
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:false
    },
    usedTime:{
        type:String,
        required:true
    },
    cat:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("products", productSchema)
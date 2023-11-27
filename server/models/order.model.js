const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requuired:true
    },
    isShipped:{
        type:Boolean,
        default:false
    },
    paymentIntent:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("orders",orderSchema)
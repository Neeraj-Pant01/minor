const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    conversationId:{
        type:String,
        required:true
    },
    senderId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("messeges", messageSchema)
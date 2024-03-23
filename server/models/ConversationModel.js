const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    memebers:{
        type:Array
    }
},{
    timestamps:true
})

module.exports = mongoose.model("convesations",conversationSchema)
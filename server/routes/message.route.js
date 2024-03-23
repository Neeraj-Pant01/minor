const verifyToken = require("../midllewraes/verifyToke");
const messageModel = require("../models/message.model");

const router = require("express").Router();

router.post('/',verifyToken, async (req,res,next)=>{
    const message = new messageModel({
        conversationId: req.body.conversationId,
        senderId: req.body.senderId,
        message: req.body.message
    })

    try{
        const savedMessage = await message.save();
        res.status(200).json(savedMessage)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})


//get all messages of the conversation
router.get('/:conversationId', verifyToken, async(req,res,next)=>{
    try{
        const messages = await messageModel.find({conversationId:req.params.conversationId});
        res.status(200).json(messages)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})


module.exports = router;
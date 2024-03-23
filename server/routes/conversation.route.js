const router = require("express").Router();
const verifyToken = require("../midllewraes/verifyToke");
const conversationModel = require('../models/ConversationModel')

//post a conversation
router.post('/',verifyToken, async (req,res,next)=>{
        const newConversation = new conversationModel({
            memebers : [req.body.senderId, req.body.receiverId]
        })
    try{
        const savedCon = await newConversation.save();
        res.status(200).json(savedCon)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})

//get a conversation by both sender and receiverId
router.get('/:firstUser/:secondUser', verifyToken, async(req,res,next)=>{
    try{
        const conversation = await conversationModel.findOne({
            memebers : {
                $all : [req.params.firstUser, req.params.secondUser]
            }
        })
        res.status(200).json(conversation)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})

module.exports = router;
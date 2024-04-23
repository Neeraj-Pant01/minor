//get a users all items
const productModel = require("../models/product.model")
const dealModel = require("../models/deals.model")
const userModelModel = require("../models/userModel.model")
const createError = require("../utils/createError")

exports.getSingleUserItems = async (req,res,next) =>{
    try{
        const products = await productModel.find({userId: req.params.id})

        if(!products) return res.status(202).json({message:"no products found !"})

        res.status(200).json(products)
    }catch(err){
        next(err)
    }
}

exports.getHourlyDeals = async (req,res,next) =>{
    try{
        const deals = await dealModel.find();
        if(!deals) return res.status(200).json(deals)

        res.status(200).json(deals)
    }catch(err){
        next(err)
    }
}

exports.postHourlyDeal = async (req,res,next) =>{
    try{
        const newDeal = new dealModel({...req.body, userId:req.user.id});
        const savedDeal = await newDeal.save();
        res.status(200).json(savedDeal);
    }catch(err){
        next(err)
    }
}

exports.deleteDeal = async (req,res,next) =>{
    try{
        const item = await dealModel.findById(req.params.id)
        if(!item) return next(createError(404, "item not found !"))
        if(item.userId === req.user.id){
        const deleteItem = await dealModel.findByIdAndDelete(req.params.id)
        }
        res.status(200).json(item)
    }catch(err){
        next(err)
    }
}
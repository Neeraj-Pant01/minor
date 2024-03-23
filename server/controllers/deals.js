//get a users all items
const productModel = require("../models/product.model")
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
        const deals = await Deals.find();
        if(!deals) return res.status(200).json(deals)

        res.status(200).json(deals)
    }catch(err){
        next(err)
    }
}

exports.postHourlyDeal = async (req,res,next) =>{
    try{
        const user = await userModelModel.findById(req.user.id)

        if(!user) return next(createError(404, "user not found ! sign up to post deals"))
    }catch(err){
        next(err)
    }
}

exports.deleteDeal = async (req,res,next) =>{
    try{

    }catch(err){
        next(err)
    }
}
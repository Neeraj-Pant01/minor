const productModel = require("../models/product.model")

exports.addProduct = async (req,res,next) =>{
    const newProduct = new productModel({...req.body,userId:req.user.id})
    try{
        const product = await newProduct.save();
        res.status(200).json(product)
    }catch(err){
        next(err)
    }
}

exports.getAproduct = async (req,res,next) =>{
    try{
        const product = await productModel.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        next(err)
    }
}

exports.getAllProducts = async (req,res,next) =>{
    const q = req.query;
        const filters = {
            ...(q.cat && {cat:q.cat}),
            ...((q.min || q.max) && {price:{
                ...(q.min && {$gt: q.min}),
                ...(q.max && {$lt: q.max})
            }}),
            ...(q.search && {productName: {$regex: q.search, $options:"i"}})
        }
            try{
                const products = q.latest ? await productModel.find().limit(9).sort({createdAt : -1}) : await productModel.find(filters).sort({[q.sort]: -1})
                res.status(200).json(products)
    }catch(err){
        next(err)
    }
}

exports.getSuggested = async (req,res,next) =>{
    try{
        const data = await productModel.find().limit(6).sort({createdAt : -1})
        res.status(200).json(data)
    }catch(err){
        next(err)
    }
}

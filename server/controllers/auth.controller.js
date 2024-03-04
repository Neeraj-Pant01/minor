const userModel = require("../models/userModel.model");
const createError = require("../utils/createError");
var CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (user) return next(createError(403, "user already exists !"))

        let ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.PASSENC).toString();

        const newUser = new userModel({ ...req.body, password: ciphertext })
        
        const savedUSer = await newUser.save();

        const accesstoken = jwt.sign({ id: savedUSer._id}, process.env.JWTKEY, { expiresIn: "1d" })

        const { password, ...others } = savedUSer._doc;

        res.status(200).json({...others, accesstoken})
    } catch (err) {
        next(err)
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (!user) return next(createError(403, "user not exists !"))

        const decPass = CryptoJS.AES.decrypt(user.password, process.env.PASSENC);
        const originalPass = decPass.toString(CryptoJS.enc.Utf8);

        if (originalPass !== req.body.password) return next(createError(403, "wrong credentials"))

        const accesstoken = jwt.sign({ id: user._id}, process.env.JWTKEY, { expiresIn: "1d" })

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accesstoken })
    } catch (err) {
        next(err)
    }
}

exports.getAUser = async (req,res,next) =>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

exports.loginGoogle = async (req,res,next) =>{
    try{
        const user = await userModel.findOne({email:req.body.email})
        if(user){
            const accesstoken = jwt.sign({id: user._id},process.env.JWTKEY, {expiresIn:"1d"})

            res.status(200).json({...user._doc, accesstoken})
        }else{
            const newUser = new userModel(req.body);
            const user = newUser.save()
            const accesstoken = jwt.sign({id:user._id}, process.env.JWTKEY, {expiresIn:"1d"})
            res.status(200).json({...user._doc, accesstoken})
        }

    }catch(err){
        next(err)
    }
}


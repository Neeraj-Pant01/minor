const createError = require("../utils/createError");
const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWTKEY,(err,payload)=>{
            if(err) return next(createError("invalid token !"));
            req.user = payload;
        })
        next()
    }else{
        next(createError(404, "token not found !"))
    }
}

module.exports = verifyToken;
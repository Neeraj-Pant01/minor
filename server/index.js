const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const connectToDatabase = require("./database/connection");

const app = express()
app.use(express.json())
app.use(cors())

app.use((err,req,res,next)=>{
    const errorCode = err.status || 500;
    const errorMessage = err.message || "internal server error !"

    return res.status(errorCode).json(errorMessage);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connectToDatabase()
    console.log(`server is running at the ${PORT}`)
})
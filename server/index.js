const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const connectToDatabase = require("./database/connection");
const authRoute = require("./routes/auth.route")
const productRoute = require("./routes/product.route")
const dealRoute = require("./routes/deals");
const convRoute = require("./routes/conversation.route")
const messageRoute = require('./routes/message.route')

const app = express()
app.use(express.json())
app.use(cors())

app.use((err,req,res,next)=>{
    const errorCode = err.status || 500;
    const errorMessage = err.message || "internal server error !"

    return res.status(errorCode).json(errorMessage);
})

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/products',productRoute)
app.use('/api/v1/deals',dealRoute)
app.use('/api/v1/conversation', convRoute)
app.use('/api/v1/messeges',messageRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connectToDatabase()
    console.log(`server is running at the ${PORT}`)
})
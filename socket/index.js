const io = require("socket.io")(8900,{
    cors:{
        origin: "http://localhost:5173",
    }
})

let users = [];

const adduser = (userId,socketId) =>{
    !users.some(user=>user.userId === userId) &&
    //pushing the usrId and socketId in the object structure to make it more easy to distinguish. 
    users.push({userId, socketId})
}

//removing the user from the users array when any user lefts
const removeUser = (socketId) =>{
    users = users.filter((user)=>user.socketId !== socketId)
}


//get a user function to get user whom we want to send the messages
const getUser = (userId)=>{
    return users.find((user)=>user.userId === userId)
}

io.on("connection",(socket)=>{
    console.log("a user is connected !")

    socket.on("adduser", userId =>{
        adduser(userId, socket.id)
        io.emit('getusers', users)
    })

    socket.on("sendmessage", ({senderId,receiverId, text})=>{
        //finding the user whom we want to send the message
        const user = getUser(receiverId)

        //after finding the user sending message to that user
        io.to(user.socketId).emit('getmessage',{
            senderId,
            text
        })
    })


    socket.on('disconnect',()=>{
        console.log("a user has been disconnected !")
        removeUser(socket.id)

        //calling again the getusers so to update the list
        io.emit('getusers', users)
    })
})